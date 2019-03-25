import styled from 'styled-components'

import { spLayout } from '../Layout'

export const AppWrapper = styled.div`
  display: flex;
  min-height: 100vh;
  width: 100%;
  flex-direction: column;
  align-items: center;
`

export const Header = styled.header`
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: #24292e;
`

export const Main = styled.main`
  display: flex;
  flex: 1;
  align-items: flex-start;
  justify-content: space-around;
  width: 100%;
  margin: 10px;
`

export const PlaceHolder = styled.aside`
  ${() => spLayout(`display: none;`)}
`

export const FooterWrapper = styled.footer`
  display: flex;
  justify-content: space-around;
  width: 100%;
  padding-top: 40px;
  padding-bottom: 30px;
  color: #5f5f5f;
  overflow: hidden;
`
