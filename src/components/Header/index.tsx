import React from 'react'
import { WithTranslation, withTranslation } from 'react-i18next'

import Input from '../../service/Input'
import GithubCorner from '../GitHubCorner'
import { HOMEPAGE } from '../../constants'
import { HeaderWrapper } from './styles'

export interface HeaderProps {
  isExpand: boolean
}

const Header = ({ isExpand, t }: HeaderProps & WithTranslation) => (
  <HeaderWrapper data-is-expand={isExpand}>
    <h1>{t('PROJECT_NAME')}</h1>
    <p>{t('PROJECT_DESCRIPTION')}</p>
    <Input />
    <GithubCorner href={HOMEPAGE} size={60} />
  </HeaderWrapper>
)

export default withTranslation()(Header)
