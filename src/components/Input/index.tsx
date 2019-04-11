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
  margin: 8px;

  background-color: hsla(0, 0%, 100%, 0.5);
  box-shadow: 0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0),
    inset 0 0 0 1px rgba(16, 22, 26, 0.15), inset 0 1px 1px rgba(16, 22, 26, 0.2);

  &:focus-within {
    background-color: hsla(0, 0%, 100%, 1);
  }

  ${({ round = false }) => `
    border-radius: ${round ? '30px' : '6px'};
  `}

  input {
    flex: 1;
    font-size: 16px;
    outline: none;
    border: none;
    background-color: rgba(0, 0, 0, 0);
  }
`

interface SearchButtonProps {
  round?: boolean
}

const SearchButton = styled.div<SearchButtonProps>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  min-width: 70px;
  margin: 8px;
  white-space: nowrap;
  cursor: pointer;
  user-select: none;
  background: rgba(167, 182, 194, 0.3);
  ${({ round = false }) => `
    border-radius: ${round ? '30px' : '3px'};
  `}

  &:hover {
    color: #182026;
    background-color: #bfccd6;
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
  const search = () => {
    if (!username) {
      // TODO tips
      return
    }
    fetchEvent()
    if (!profileInfo || profileInfo.login !== username) {
      fetchProfile()
    }
  }
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== 'Enter') {
      return
    }
    search()
  }
  const handleTagClick = () =>
    changeEventType(
      eventType === GithubEventsType.EVENTS
        ? GithubEventsType.RECEIVED_EVENTS
        : GithubEventsType.EVENTS,
    )

  return (
    <>
      <InputWrapper round>
        <input
          placeholder={t('Github username')}
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
      <SearchButton round onClick={search}>
        {t('Search')}
      </SearchButton>
    </>
  )
}

export default withTranslation()(Input)
