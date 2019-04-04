import React from 'react'
import { render } from 'react-dom'
// https://react-redux.js.org/
import { Provider } from 'react-redux'
// https://react.i18next.com/
import { I18nextProvider } from 'react-i18next'

import App from './components/App'
import configureStore from './store'
import i18n from './i18n'
import EasterEggs from './components/EasterEggs'
import { AUTHOR, HOMEPAGE } from './constants'
import { GlobalStyle } from './styles'
import { checkParam } from './utils'

const store = configureStore()

render(
  <>
    <GlobalStyle />
    <Provider store={store}>
      <I18nextProvider i18n={i18n}>
        <App />
      </I18nextProvider>
    </Provider>
  </>,
  document.querySelector('#root'),
)

checkParam(store)
EasterEggs({ author: AUTHOR, homepage: HOMEPAGE })
