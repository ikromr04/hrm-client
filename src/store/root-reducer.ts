import { combineReducers } from '@reduxjs/toolkit'
import { employeeSlice } from './employee-slice/employees-slice'
import { SliceName } from '../const'
import { jobSlice } from './job-slice/job-slice'
import { positionSlice } from './position-slice/position-slice'
import { languageSlice } from './language-slice/language-slice'
import { appSlice } from './app-slice/app-slice'
import { authSlice } from './auth-slice/auth-slice'
import { departmentSlice } from './department-slice/department-slice'
import { vacationsSlice } from './vacation-slice/vacation-slice'

export const rootReducer = combineReducers({
  [SliceName.Auth]: authSlice.reducer,
  [SliceName.App]: appSlice.reducer,
  [SliceName.Employee]: employeeSlice.reducer,
  [SliceName.Job]: jobSlice.reducer,
  [SliceName.Position]: positionSlice.reducer,
  [SliceName.Language]: languageSlice.reducer,
  [SliceName.Department]: departmentSlice.reducer,
  [SliceName.Vacation]: vacationsSlice.reducer,
})
