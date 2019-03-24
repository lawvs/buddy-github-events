import React from 'react'
import styled from 'styled-components'

import { GithubUser } from '../../api/types'
import { spLayout } from '../Layout'

const ProfileWrapper = styled.aside`
  max-width: 230px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #d1d5da;
  ${() => spLayout(`display: none;`)}

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
    margin: 8px;
  }
`

const Profile = ({ profileInfo }: { profileInfo?: GithubUser }) =>
  profileInfo ? (
    <ProfileWrapper>
      <img src={profileInfo.avatar_url} width={'100%'} />
      <h5>
        <a href={profileInfo.html_url} target="_blank" rel="noopener noreferrer">
          {profileInfo.name ? profileInfo.name : profileInfo.login}
        </a>
      </h5>
      <p>{profileInfo.bio}</p>
    </ProfileWrapper>
  ) : null

export default Profile
