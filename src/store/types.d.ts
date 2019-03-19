import { MainState, MainActionTypes } from './main/types'
import { ConfigState, ConfigActionTypes } from './config/types'
import { ThunkDispatch, ThunkMiddleware } from 'redux-thunk'

// global state
export interface GlobalState {
  readonly mainState: MainState
  readonly configState: ConfigState
}

export type GlobalActionTypes = MainActionTypes | ConfigActionTypes

export type AppThunkMiddleware = ThunkMiddleware<GlobalState, GlobalActionTypes>
export type AppThunkDispatch = ThunkDispatch<GlobalState, undefined, GlobalActionTypes>
