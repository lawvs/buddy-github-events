import i18next from '../../i18n'
import { CHANGE_LANGUAGE } from './constants'
import { ConfigActionTypes, ConfigState } from './types'

const initState: ConfigState = {
  language: i18next.language,
}

export default (state = initState, action: ConfigActionTypes): ConfigState => {
  switch (action.type) {
    case CHANGE_LANGUAGE: {
      const {
        payload: { language },
      } = action
      return {
        ...state,
        language,
      }
    }
    default:
      return state
  }
}
