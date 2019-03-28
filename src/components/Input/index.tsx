import React from 'react'
import styled from 'styled-components'
import { withTranslation, WithTranslation } from 'react-i18next'

import { GithubEventsType } from '../../api'
import { GithubUser } from '../../api/types'
import Tag from './Tag'

const InputWrapper = styled.div<{ round?: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 30px;
  min-width: 300px;
  padding: 0 12px;
  margin: 16px;

  background-color: hsla(0, 0%, 100%, 0.5);
  box-shadow: 0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0),
    inset 0 0 0 1px rgba(16, 22, 26, 0.15), inset 0 1px 1px rgba(16, 22, 26, 0.2);

  &:focus-within {
    background-color: hsla(0, 0%, 100%, 1);
  }

  ${({ round = false }) => `border-radius: ${round ? '30px' : '6px'};`}

  input {
    flex: 1;
    font-size: 16px;
    outline: none;
    border: none;
    background-color: rgba(0, 0, 0, 0);
  }
`

export interface InputProps {
  username: string
  eventType: GithubEventsType
  profileInfo?: GithubUser
  changeName(name: string): void
  changeEventType(type: GithubEventsType): void
  fetchProfile(): void
  fetchEvent(): void
}

const Input = ({
  username,
  eventType,
  profileInfo,
  changeName,
  fetchProfile,
  fetchEvent,
  changeEventType,
  t,
}: InputProps & WithTranslation) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    changeName(e.currentTarget.value.trim())
  }
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && e.currentTarget.value) {
      fetchEvent()
      if (!profileInfo || profileInfo.login !== e.currentTarget.value) {
        fetchProfile()
      }
    }
  }
  const handleTagClick = () =>
    changeEventType(
      eventType === GithubEventsType.EVENTS
        ? GithubEventsType.RECEIVED_EVENTS
        : GithubEventsType.EVENTS,
    )
  return (
    <InputWrapper round>
      <input
        type="search"
        value={username || ''}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
      />
      {profileInfo &&
      username === profileInfo.login &&
      profileInfo.type === 'Organization' ? null : (
        <Tag round onClick={handleTagClick}>
          {eventType === GithubEventsType.EVENTS ? t('broadcast event') : t('received event')}
        </Tag>
      )}
    </InputWrapper>
  )
}

export default withTranslation()(Input)
