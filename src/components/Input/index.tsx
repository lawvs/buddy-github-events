import React from 'react'
import { withTranslation, WithTranslation } from 'react-i18next'

import { GithubEventsType } from '../../api'
import { GithubUser } from '../../api/types'
import { Tag } from '../Tag'
import { InputWrapper, SearchButton, InputGroupWrapper } from './styles'

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
  const isUsernameChange = () =>
    !profileInfo || profileInfo.login.toLowerCase() !== username.toLowerCase()
  const search = () => {
    if (!username) {
      // TODO tips
      return
    }
    fetchEvent()
    if (!profileInfo || isUsernameChange()) {
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
        {/* hidden type switch when current profile is an Organization */}
        {profileInfo && profileInfo.type === 'Organization' && !isUsernameChange() ? null : (
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
