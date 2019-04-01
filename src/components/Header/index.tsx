import React from 'react'

import Input from '../../service/Input'
import GithubCorner from '../GitHubCorner'
import { HOMEPAGE } from '../../constants'
import { HeaderWrapper } from './styles'

export interface HeaderProps {
  isExpand: boolean
}

const Header = ({ isExpand }: HeaderProps) => (
  <HeaderWrapper data-is-expand={isExpand}>
    <h1>Buddy's Github Events</h1>
    <p>Check out your buddy's github activities</p>
    <Input />
    <GithubCorner href={HOMEPAGE} size={60} />
  </HeaderWrapper>
)

export default Header
