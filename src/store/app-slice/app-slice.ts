import { createSlice } from '@reduxjs/toolkit'
import { SliceName, defaultEmployeesFilter } from '../../const'
import { getAppSettings, saveAppSettings } from '../../services/app-settings'
import { EmployeesFilter } from '@/types/employees'

export type AppSlice = {
  isNavigationCollapsed: boolean,
  employeesFilter: EmployeesFilter
}

const initialState: AppSlice = {
  isNavigationCollapsed: getAppSettings().isNavigationCollapsed,
  employeesFilter: getAppSettings().employeesFilter,
}

export const appSlice = createSlice({
  name: SliceName.App,
  initialState,
  reducers: {
    toggleNavigationAction: (state) => {
      const settings = getAppSettings()
      saveAppSettings({
        ...settings,
        isNavigationCollapsed: !settings.isNavigationCollapsed,
      })
      state.isNavigationCollapsed = !settings.isNavigationCollapsed
    },
    setEmployeesFilterAction: (state, action) => {
      const settings = getAppSettings()
      saveAppSettings({
        ...settings,
        employeesFilter: action.payload,
      })
      state.employeesFilter = action.payload
    },
    resetEmployeesFilterAction: (state) => {
      const settings = getAppSettings()
      saveAppSettings({
        ...settings,
        employeesFilter: defaultEmployeesFilter
      })
      state.employeesFilter = defaultEmployeesFilter
    },
  },
})

export const {
  toggleNavigationAction,
  setEmployeesFilterAction,
  resetEmployeesFilterAction,
} = appSlice.actions
