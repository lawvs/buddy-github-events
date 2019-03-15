import React from 'react'
import { render } from 'react-dom'

import { GlobalStyle } from './styles'

const App = () => <div>Hello World!</div>

render(
  <>
    <GlobalStyle />
    <App />
  </>,
  document.querySelector('#root'),
)
