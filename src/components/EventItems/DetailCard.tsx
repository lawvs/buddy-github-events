import React from 'react'
import { Event } from 'parse-github-event'
import ReactMarkdown from 'react-markdown'
import styled from 'styled-components'

import Card, { INTENTS } from '../Card'

const DetailCardWrapper = styled(Card)`
  overflow: hidden;
  h5 {
    font-weight: 600;
    font-size: 16px;
    margin: 8px 0;
  }

  a {
    text-decoration: none;
    color: #24292e;
    &:hover {
      color: #0366d6;
    }
  }

  & span {
    margin: 0 8px;
    color: #6a737d;
  }

  img {
    max-width: 500px;
  }

  details {
    max-width: 500px;
    word-break: break-word;
  }
`

const DetailCard = ({ event }: { event: Event }) => {
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
          <details>
            <ReactMarkdown source={event.payload.issue.body} />
          </details>
        </DetailCardWrapper>
      )
    default:
      return null
  }
}

export default DetailCard
