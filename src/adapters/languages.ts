/* eslint-disable @typescript-eslint/no-explicit-any */
import { Language, Languages } from '../types/language'

export const adaptLanguageToClient = (serverLanguage: {[key: string]: any }): Language => ({
  id: serverLanguage.id,
  name: serverLanguage.name,
})

export const adaptLanguagesToClient = (serverLanguages: {[key: string]: any }[]): Languages =>
  serverLanguages.map((serverLanguage) => adaptLanguageToClient(serverLanguage))
