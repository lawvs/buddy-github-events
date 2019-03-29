import React from 'react'

import EventItems from '../../service/EventItem'
import Input from '../../service/Input'
import Profile from '../../service/Profile'
import GithubCorner from '../GitHubCorner'
import Loading from '../../service/Loading'
import Footer from '../Footer'
import { HOMEPAGE } from '../../constants'
import { AppWrapper, Header, Main, PlaceHolder, Center } from './styles'

const App = () => (
  <AppWrapper>
    <Header>
      <Input />
      <GithubCorner href={HOMEPAGE} size={60} />
    </Header>
    <Main>
      <Profile />
      <Center>
        <Loading />
        <EventItems />
      </Center>
      <PlaceHolder />
    </Main>
    <Footer />
  </AppWrapper>
)

export default App
