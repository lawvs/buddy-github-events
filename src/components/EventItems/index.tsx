import React, { Fragment, useEffect, useRef, useCallback } from 'react'
import { withTranslation, WithTranslation } from 'react-i18next'
import { parse } from 'parse-github-event'
import { GithubApi } from 'parse-github-event/lib/types'
import TimeAgo from 'react-timeago'

import { ItemWrapper, InfoWrapper, Avatar, Descript, Sentinel } from './styled'
import { CenteredCard, INTENTS } from '../Card'
import DetailCard from './DetailCard'

const GITHUB_DOMAIN = 'https://github.com'

const EventItem = (event: GithubApi.GithubEvent) => {
  const {
    actor: { login, avatar_url },
  } = event

  const actorUrl = login.endsWith('[bot]') // handle bot
    ? `${GITHUB_DOMAIN}/apps/${login.slice(0, -'[bot]'.length)}`
    : `${GITHUB_DOMAIN}/${login}`

  const eventParsed = parse(event)

  if (!eventParsed) {
    console.error('github event parsed fail!', event)
    return null // TODO: ErrorCompents
  }

  const templateDate: { [x: string]: React.ReactNode } = eventParsed.data
  if (templateDate.repository) {
    templateDate.repository = (
      <a
        key={'repo'}
        href={`${GITHUB_DOMAIN}/${templateDate['repository']}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        {templateDate['repository']}
      </a>
    )
  }
  if (templateDate.member) {
    templateDate.member = (
      <a
        key={'member'}
        href={`${GITHUB_DOMAIN}/${templateDate.member}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        {templateDate.member}
      </a>
    )
  }

  const descriptArray: React.ReactNode[] = [
    <Fragment key={'login'}>
      <a href={actorUrl} target="_blank" rel="noopener noreferrer">
        {login}
      </a>
      &nbsp;
    </Fragment>,
  ]

  // parse template
  const regex = /{{(.*?)}}/g
  const { text } = eventParsed
  let startIndex = 0
  let matchResult
  while ((matchResult = regex.exec(text))) {
    descriptArray.push(text.slice(startIndex, matchResult.index))
    descriptArray.push(eventParsed.data[matchResult[1]])
    startIndex = regex.lastIndex
  }

  return (
    <ItemWrapper>
      <a href={actorUrl} target="_blank" rel="noopener noreferrer">
        <Avatar src={avatar_url} width={'32'} height={'32'} alt={`@${login}`} />
      </a>
      <InfoWrapper>
        <Descript>
          {descriptArray} <TimeAgo date={new Date(event.created_at)} />
        </Descript>
        <DetailCard event={event} />
      </InfoWrapper>
    </ItemWrapper>
  )
}

export interface EventItemsProps {
  events?: GithubApi.GithubEvent[]
  showMore(): void
}

const EventItems = ({ events, showMore, t }: EventItemsProps & WithTranslation) => {
  const observer = useRef<IntersectionObserver | null>(null)
  const sentinelRef = useCallback(node => {
    if (node === null) {
      return
    }
    observer.current = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        showMore()
      }
    })
    observer.current.observe(node)
  }, [])

  useEffect(() => {
    return () => observer.current?.disconnect()
  }, [])

  if (!events) {
    return null
  }
  if (events.length === 0) {
    return <CenteredCard intent={INTENTS.WARNING}>{t('No recent activity')}</CenteredCard>
  }
  return (
    <div>
      {events
        .filter((e, index, self) => index === self.findIndex(t => t.id === e.id)) // remove id duplicates
        .map(event => (
          <EventItem key={event.id} {...event} />
        ))}
      <Sentinel ref={sentinelRef} />
    </div>
  )
}

export default withTranslation()(EventItems)
