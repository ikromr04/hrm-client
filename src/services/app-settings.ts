import { defaultEmployeesFilter } from '@/const'
import { EmployeesFilter } from '@/types/employees'

const SETTINGS_KEY_NAME = 'hrm-evolet-application-setting'

export type AppSettings = {
  isNavigationCollapsed: boolean,
  employeesFilter: EmployeesFilter
}

export const initialSettings: AppSettings = {
  isNavigationCollapsed: false,
  employeesFilter: defaultEmployeesFilter
}

export const getAppSettings = (): AppSettings => {
  if (localStorage.getItem(SETTINGS_KEY_NAME)) {
    const settings: string | null = localStorage.getItem(SETTINGS_KEY_NAME)
    return JSON.parse(settings || '')
  }
  saveAppSettings(initialSettings)
  return initialSettings
}

export const saveAppSettings = (settings: AppSettings): void =>
  localStorage.setItem(SETTINGS_KEY_NAME, JSON.stringify(settings))

export const dropAppSettings = (): void =>
  localStorage.setItem(SETTINGS_KEY_NAME, JSON.stringify(initialSettings))
