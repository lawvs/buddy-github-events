import React from 'react'
import { render } from 'react-dom'
// https://react-redux.js.org/
import { Provider } from 'react-redux'
// https://react.i18next.com/
import { I18nextProvider } from 'react-i18next'

import configureStore from './store'
import i18n from './i18n'
import { GlobalStyle } from './styles'

const store = configureStore()
const App = () => <div>Hello World!</div>

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
