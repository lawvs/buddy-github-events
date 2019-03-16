import i18next from '../../i18n'
import { CHANGE_LANGUAGE } from './constants'

// config state
export interface ConfigState {
  readonly language: typeof i18next.language
}

// actions
export interface ChangLanguageAction {
  type: typeof CHANGE_LANGUAGE
  payload: {
    language: ConfigState['language']
  }
}

export type ConfigActionTypes = ChangLanguageAction
