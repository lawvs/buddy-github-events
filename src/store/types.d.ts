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

type StatePropertyNames<T> = { [K in keyof T]: T[K] extends Function ? never : K }[keyof T]
type StateProperties<T> = Pick<T, StatePropertyNames<T>>

type ActionPropertyNames<T> = { [K in keyof T]: T[K] extends Function ? K : never }[keyof T]
type ActionProperties<T> = Pick<T, ActionPropertyNames<T>>
