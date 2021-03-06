import styled from 'styled-components'

import { spLayout } from '../Layout'

export const AppWrapper = styled.div`
  display: flex;
  min-height: 100vh;
  width: 100%;
  flex-direction: column;
  align-items: center;
`

export const Main = styled.main`
  display: flex;
  flex: 1;
  align-items: flex-start;
  justify-content: space-evenly;
  width: 100%;
  margin: 10px;
`

export const Center = styled.article`
  display: flex;
  flex-direction: column;
  flex: 0.2 1 500px;
`

export const PlaceHolder = styled.aside`
  ${spLayout(`
    display: none;
  `)}
`
