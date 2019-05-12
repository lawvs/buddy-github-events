import React from 'react'
import styled, { css } from 'styled-components'
import ReactMarkdown from 'react-markdown'
import { GithubApi } from 'parse-github-event/lib/types'

import Card, { INTENTS } from '../Card'
import { spLayout } from '../Layout'
import { Tag } from '../Tag'

const monospacedFonts = css`
  font-family: SFMono-Regular, Consolas, Liberation Mono, Menlo, Courier, monospace;
`

const DetailCardWrapper = styled(Card)`
  overflow: hidden;
  word-break: break-word;

  h5 {
    font-weight: 600;
    font-size: 16px;
    margin: 8px 0;

    /* issue number */
    span {
      margin: 0 8px;
      color: #6a737d;
    }
  }

  a {
    text-decoration: none;
    color: #24292e;
    &:hover {
      color: #0366d6;
    }
  }

  details {
    ${spLayout(`
      display: none;
    `)}
    img {
      max-width: 500px;
    }
    pre {
      ${monospacedFonts}
      background-color: #f6f8fa;
      border-radius: 3px;
      font-size: 85%;
      line-height: 1.45;
      max-width: 500px;
      overflow: auto;
      padding: 16px;
    }
  }
`

const CommitMessage = styled.p`
  ${monospacedFonts}

  font-size: 14px;
  margin: unset;
  margin: 4px;
`

const GITHUB_URL = 'https://github.com'

const DetailCard = ({ event }: { event: GithubApi.GithubEvent }) => {
  // https://developer.github.com/v3/activity/events/types/
  switch (event.type) {
    case 'IssuesEvent':
    case 'IssueCommentEvent':
      return (
        <DetailCardWrapper intent={INTENTS.NONE}>
          <h5>
            <a href={event.payload.issue.html_url} rel="noopener noreferrer" target="_blank">
              {event.payload.issue.title}
            </a>
            <span>#{event.payload.issue.number}</span>
          </h5>
          {event.payload.issue.body && (
            <details>
              <ReactMarkdown source={event.payload.issue.body} />
            </details>
          )}
        </DetailCardWrapper>
      )
    case 'PullRequestEvent':
      return (
        <DetailCardWrapper intent={INTENTS.NONE}>
          <h5>
            <a href={event.payload.pull_request.html_url} rel="noopener noreferrer" target="_blank">
              {event.payload.pull_request.title}
            </a>
            <span>#{event.payload.pull_request.number}</span>
          </h5>
          {event.payload.pull_request.body && (
            <details>
              <ReactMarkdown source={event.payload.pull_request.body} />
            </details>
          )}
        </DetailCardWrapper>
      )
    case 'PushEvent':
      return event.payload.commits.length > 0 ? (
        <DetailCardWrapper intent={INTENTS.NONE}>
          {event.payload.commits.map((
            commit: any, // TODO fix type https://developer.github.com/v3/repos/commits/
          ) => (
            <CommitMessage key={commit.sha}>
              <a
                href={`${GITHUB_URL}/${event.repo.name}/commit/${commit.sha}`}
                rel="noopener noreferrer"
                target="_blank"
              >
                <Tag round>{commit.sha.slice(0, 7)}</Tag>
              </a>
              {commit.message.split('\n')[0]}
            </CommitMessage>
          ))}
        </DetailCardWrapper>
      ) : null
    default:
      return null
  }
}

export default DetailCard
