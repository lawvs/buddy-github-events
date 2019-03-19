import { MainState, MainActionTypes } from './main/types'
import { ConfigState, ConfigActionTypes } from './config/types'

// global state
export interface GlobalState {
  readonly mainState: MainState
  readonly configState: ConfigState
}

export type GlobalActionTypes = MainActionTypes | ConfigActionTypes
