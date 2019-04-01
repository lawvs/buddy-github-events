import React from 'react'

import EventItems from '../../service/EventItem'
import Profile from '../../service/Profile'
import Loading from '../../service/Loading'
import Footer from '../Footer'
import ErrorCard from '../../service/ErrorCard'
import Header from '../../service/Header'
import { AppWrapper, Main, PlaceHolder, Center } from './styles'

const App = () => (
  <AppWrapper>
    <Header />
    <Main>
      <Profile />
      <Center>
        <ErrorCard />
        <Loading />
        <EventItems />
      </Center>
      <PlaceHolder />
    </Main>
    <Footer />
  </AppWrapper>
)

export default App
