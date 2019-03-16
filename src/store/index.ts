// @see https://redux.js.org
import { createStore, applyMiddleware, compose, Store } from 'redux'
// @see https://github.com/reduxjs/redux-thunk
import thunk from 'redux-thunk'

import rootReducer from './reducer'
import { GlobalState } from './types'

const DEBUG = process.env.NODE_ENV === 'development'

const configureStore = (preloadedState: GlobalState | {} = {}): Store<GlobalState> => {
  // configure middlewares
  const middlewares = [thunk]
  // compose enhancers
  // @see https://github.com/zalmoxisus/redux-devtools-extension
  const composeEnhancers =
    DEBUG && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      : compose
  const enhancer = composeEnhancers(applyMiddleware(...middlewares))
  const store = createStore(rootReducer, preloadedState, enhancer)
  return store
}

export default configureStore
