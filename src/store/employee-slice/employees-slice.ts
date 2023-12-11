import { createSlice } from '@reduxjs/toolkit'
import { SliceName } from '../../const'
import { 
  Activities, 
  AvatarPath, 
  Educations, 
  Employee, 
  Employees, 
  PersonalData 
} from '../../types/employee'
import {
  crudEmployeeLanguagesAction,
  deleteEmployeeActivityAction,
  deleteEmployeeEducationAction,
  fetchEmployeeActivitiesAction,
  fetchEmployeeByIdAction,
  fetchEmployeeEducationsAction,
  fetchEmployeePersonalDataAction,
  fetchEmployeesAction,
  storeEmployeeActivityAction,
  storeEmployeeEducationAction,
  updateEmployeeAction,
  updateEmployeeActivityAction,
  updateEmployeeEducationAction,
  updateEmployeePersonalDataAction
} from './employees-api-actions'

export type EmployeesSlice = {
  employee: Employee | null
  employees: Employees | null
  employeeAvatar: AvatarPath | null
  employeePersonalData: PersonalData | null
  employeeEducations: Educations | null
  employeeActivities: Activities | null
}

const initialState: EmployeesSlice = {
  employee: null,
  employees: null,
  employeeAvatar: null,
  employeePersonalData: null,
  employeeEducations: null,
  employeeActivities: null,
}

export const employeeSlice = createSlice({
  name: SliceName.Employee,
  initialState,
  reducers: {
    setEmployeesAvatarAction: (state, action) => {
      state.employeeAvatar = action.payload
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchEmployeeByIdAction.fulfilled, (state, action) => {
        state.employee = action.payload
        state.employeeAvatar = action.payload.avatar
      })
      .addCase(fetchEmployeePersonalDataAction.fulfilled, (state, action) => {
        state.employeePersonalData = action.payload
      })
      .addCase(updateEmployeeAction.fulfilled, (state, action) => {
        state.employee = action.payload
      })
      .addCase(updateEmployeePersonalDataAction.fulfilled, (state, action) => {
        state.employeePersonalData = action.payload
      })
      .addCase(fetchEmployeeEducationsAction.fulfilled, (state, action) => {
        state.employeeEducations = action.payload
      })
      .addCase(updateEmployeeEducationAction.fulfilled, (state, action) => {
        const updatedEducation = action.payload
        if (state.employeeEducations) {
          state.employeeEducations = state.employeeEducations.map((education) =>
            (education.id === updatedEducation.id) ? updatedEducation : education
          )
        } else {
          state.employeeEducations = [updatedEducation]
        }
      })
      .addCase(storeEmployeeEducationAction.fulfilled, (state, action) => {
        const educations = state.employeeEducations || []
        state.employeeEducations = [...educations, action.payload]
      })
      .addCase(deleteEmployeeEducationAction.fulfilled, (state, action) => {
        const educations = state.employeeEducations || []
        state.employeeEducations = educations.filter(({ id }) => id !== action.payload)
      })
      .addCase(fetchEmployeeActivitiesAction.fulfilled, (state, action) => {
        state.employeeActivities = action.payload
      })
      .addCase(updateEmployeeActivityAction.fulfilled, (state, action) => {
        const updatedActivity = action.payload
        if (state.employeeActivities) {
          state.employeeActivities = state.employeeActivities.map((activity) =>
            (activity.id === updatedActivity.id) ? updatedActivity : activity
          )
        } else {
          state.employeeActivities = [updatedActivity]
        }
      })
      .addCase(storeEmployeeActivityAction.fulfilled, (state, action) => {
        const activities = state.employeeActivities || []
        state.employeeActivities = [...activities, action.payload]
      })
      .addCase(deleteEmployeeActivityAction.fulfilled, (state, action) => {
        const activities = state.employeeActivities || []
        state.employeeActivities = activities.filter(({ id }) => id !== action.payload)
      })
      .addCase(crudEmployeeLanguagesAction.fulfilled, (state, action) => {
        const employee = state.employee && {
          ...state.employee,
          languages: action.payload,
        }
        state.employee = employee
      })
      .addCase(fetchEmployeesAction.fulfilled, (state, action) => {
        state.employees = action.payload
      })
  },
})

export const { setEmployeesAvatarAction } = employeeSlice.actions
