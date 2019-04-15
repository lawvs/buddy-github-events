import React, { Fragment } from 'react'
import { withTranslation, WithTranslation } from 'react-i18next'
import { Event, parse } from 'parse-github-event'
import TimeAgo from 'react-timeago'

import { Wrapper, Avatar, Descript } from './styled'
import Card, { INTENTS } from '../Card'

const GITHUB_DOMAIN = 'https://github.com'

const EventItem = (event: Event) => {
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

  const templateDate: any = eventParsed.data // TODO fix type
  if (eventParsed.data.hasOwnProperty('repository')) {
    templateDate['repository'] = (
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
  if (eventParsed.data.hasOwnProperty('member')) {
    templateDate['member'] = (
      <a
        key={'member'}
        href={templateDate['member']['html_url']}
        target="_blank"
        rel="noopener noreferrer"
      >
        {templateDate['member']['login']}
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
    descriptArray.push((eventParsed.data as any)[matchResult[1]]) // TODO: fix type
    startIndex = regex.lastIndex
  }

  return (
    <Wrapper>
      <a href={actorUrl} target="_blank" rel="noopener noreferrer">
        <Avatar src={avatar_url} width={'32'} height={'32'} alt={`@${login}`} />
      </a>
      <Descript>{descriptArray}</Descript>
      <TimeAgo date={new Date(event.created_at)} />
    </Wrapper>
  )
}

export interface EventItemsProps {
  events?: Event[]
}

const EventItems = ({ events, t }: EventItemsProps & WithTranslation) => {
  if (!events) {
    return null
  }
  if (events.length === 0) {
    return <Card intent={INTENTS.WARNING}>{t('No recent activity')}</Card>
  }
  return (
    <div>
      {events
        .filter((e, index, self) => index === self.findIndex(t => t.id === e.id)) // remove id duplicates
        .map(event => (
          <EventItem key={event.id} {...event} />
        ))}
    </div>
  )
}

export default withTranslation()(EventItems)
