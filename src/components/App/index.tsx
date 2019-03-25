import React from 'react'

import { FooterWrapper, AppWrapper, Header, Main, PlaceHolder } from './styles'
import EventItems from '../../service/EventItem'
import { author } from '../../../package.json'
import Input from '../../service/Input'
import Profile from '../../service/Profile'

const Footer = () => (
  <FooterWrapper>
    CopyRight © {new Date().getFullYear()} {author}. All rights reserved.
  </FooterWrapper>
)

const App = () => (
  <AppWrapper>
    <Header>
      <Input />
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
