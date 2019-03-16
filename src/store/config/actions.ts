import i18next from '../../i18n'
import { CHANGE_LANGUAGE } from './constants'
import { ChangLanguageAction } from './types'

export const changeLanguage = (language: string): ChangLanguageAction => {
  i18next.changeLanguage(language)
  return {
    type: CHANGE_LANGUAGE,
    payload: { language },
  }
}
