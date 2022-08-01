import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import Pseudo from 'i18next-pseudo'
import LanguageDetector from 'i18next-browser-languagedetector'
import _ from 'lodash'
import commonEn from './i18n/en/defult.json'

import he from './i18n/he/defult.json'

i18n
  .use(
    new Pseudo({
      enabled: true,
      languageToPseudo: 'pseudo',
      wrapped: true,
    }),
  )
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      'en': {
        // Namespaces
        default: commonEn,
       
      },
      'en-US': {
        default: commonEn,
      
      },
      'pseudo': {
        default: commonEn,
      
      },
      'he': { default: he },
    },
    fallbackLng: 'en',
    debug: !(process.env.NODE_ENV === 'production'),
    defaultNS: ['default'],
    interpolation: {
      escapeValue: false,
    },
    postProcess: ['pseudo'],
    detection: {
      lookupQuerystring: 'lang',
      lookupLocalStorage: 'lang',
    },
    saveMissing: !(process.env.NODE_ENV === 'production'),
  })

export const parseDynamicContent = (string) => {
  if (!_.isString(string)) {
    return string
  }

  return string
    ? i18n.t(
        `dynamic.${_.camelCase(string?.replace(/[^a-zA-Z0-9 ]/g, ''))}`,
        string,
      )
    : ''
}

export default i18n
