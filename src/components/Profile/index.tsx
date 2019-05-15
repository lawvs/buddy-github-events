import React, { useState } from 'react'
import styled, { keyframes } from 'styled-components'
import { GithubApi } from 'parse-github-event/lib/types'

import { spLayout } from '../Layout'

const fadein = keyframes`
  from { opacity: 0; }
  to   { opacity: 1; }
`

const ProfileWrapper = styled.aside`
  max-width: 230px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #d1d5da;
  overflow: hidden;
  opacity: 0;
  animation: ${fadein} 0.5s ease 0s forwards;
  ${spLayout(`
    display: none;
  `)}

  box-shadow: 10px 8px 0px #ccc;
  border-radius: 10px;

  a {
    color: #24292e;
    text-decoration: none;
    font-weight: 600;
  }

  a:hover {
    text-decoration: underline;
  }

  p {
    padding: 8px;
    margin: 0;
  }

  h5 {
    font-size: 16px;
    margin: 8px;
  }
`

const Profile = ({ profileInfo }: { profileInfo?: GithubApi.User }) => {
  const [loadedName, setLoadedName] = useState<string>()
  if (!profileInfo) {
    return <div />
  }
  const preloadImg = new Image()
  preloadImg.onload = () => setLoadedName(profileInfo.login)
  preloadImg.src = profileInfo.avatar_url
  if (loadedName !== profileInfo.login) {
    return <div /> // loading
  }
  return (
    <ProfileWrapper>
      <img src={profileInfo.avatar_url} width={'100%'} />
      <h5>
        <a href={profileInfo.html_url} target="_blank" rel="noopener noreferrer">
          {profileInfo.name ? profileInfo.name : profileInfo.login}
        </a>
      </h5>
      <p>{profileInfo.bio}</p>
    </ProfileWrapper>
  )
}

export default Profile
