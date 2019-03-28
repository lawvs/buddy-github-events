import React from 'react'
import { render } from 'react-dom'
// https://react-redux.js.org/
import { Provider } from 'react-redux'
// https://react.i18next.com/
import { I18nextProvider } from 'react-i18next'

import App from './components/App'
import configureStore from './store'
import i18n from './i18n'
import { fetchProfile, fetchEvent, changeName } from './store/main/actions'
import { GlobalStyle } from './styles'

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

// check url param
const url = new URL(window.location.href)
const name = url.searchParams.get('name')
if (name) {
  store.dispatch(changeName(name))
  store.dispatch(fetchEvent())
  store.dispatch(fetchProfile())
  url.searchParams.delete('name')
  window.history.pushState('', document.title, url.href)
}
