import React from 'react'

import { FooterWrapper, AppWrapper, Header, Main, PlaceHolder } from './styles'
import EventItems from '../../service/EventItem'
import Input from '../../service/Input'
import Profile from '../../service/Profile'
import GithubCorner from './GitHubCorner'
import { HOMEPAGE, AUTHOR, AUTHOR_GITHUB_URL, LICENSE_URL, LICENSE } from '../../constants'

const Footer = () => (
  <FooterWrapper>
    <a href={HOMEPAGE} target="_blank" rel="noopener noreferrer">
      Github
    </a>
    <section>
      Released under the{' '}
      <a href={LICENSE_URL} target="_blank" rel="noopener noreferrer">
        {LICENSE} License
      </a>
    </section>
    <section>
      CopyRight © {new Date().getFullYear()}{' '}
      <a href={AUTHOR_GITHUB_URL} target="_blank" rel="noopener noreferrer">
        {AUTHOR}
      </a>
      . All rights reserved.
    </section>
  </FooterWrapper>
)

const App = () => (
  <AppWrapper>
    <Header>
      <Input />
      <GithubCorner />
    </Header>
    <Main>
      <Profile />
      <EventItems />
      <PlaceHolder />
    </Main>
    <Footer />
  </AppWrapper>
)

export default App
