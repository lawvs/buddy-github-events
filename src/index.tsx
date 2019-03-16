import React from 'react'
import { render } from 'react-dom'
// https://react.i18next.com/
import { I18nextProvider } from 'react-i18next'

import i18n from './i18n'
import { GlobalStyle } from './styles'

const App = () => <div>Hello World!</div>

render(
  <>
    <GlobalStyle />
    <I18nextProvider i18n={i18n}>
      <App />
    </I18nextProvider>
  </>,
  document.querySelector('#root'),
)
