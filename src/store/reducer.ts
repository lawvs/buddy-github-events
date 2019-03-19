import { combineReducers, Reducer } from 'redux'

import mainState from './main'
import configState from './config'
import { GlobalState, GlobalActionTypes } from './types'

const reducer: Reducer<GlobalState, GlobalActionTypes> = combineReducers({
  mainState,
  configState,
})

export default reducer
