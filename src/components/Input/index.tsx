import React from 'react'
import { withTranslation, WithTranslation } from 'react-i18next'

import { GithubEventsType } from '../../api'
import { GithubUser } from '../../api/types'
import { InputWrapper, SearchButton, Tag, InputGroupWrapper } from './styles'

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
    <InputGroupWrapper>
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
    </InputGroupWrapper>
  )
}

export default withTranslation()(Input)
