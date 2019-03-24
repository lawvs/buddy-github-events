import React from 'react'
import { GithubEventsType } from '../../api'
import styled from 'styled-components'
import { GithubUser } from '../../api/types'

const InputWrapper = styled.input`
  outline: none;
  border: none;
  line-height: 40px;
  font-size: 16px;
  border-radius: 30px;
  box-shadow: 0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0),
    inset 0 0 0 1px rgba(16, 22, 26, 0.15), inset 0 1px 1px rgba(16, 22, 26, 0.2);
  height: 30px;
  width: 300px;
  padding: 0 12px;
  margin: 16px;
`

export interface InputProps {
  username: string
  profileInfo?: GithubUser
  changeName(name: string): void
  changeEventType(type: GithubEventsType): void
  fetchProfile(): void
  fetchEvent(): void
}

const Input = ({ username, profileInfo, changeName, fetchProfile, fetchEvent }: InputProps) => {
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
  return (
    <InputWrapper
      type="search"
      value={username || ''}
      onChange={handleChange}
      onKeyPress={handleKeyPress}
    />
  )
}

export default Input
