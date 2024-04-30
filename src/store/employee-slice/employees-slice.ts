import { createSlice } from '@reduxjs/toolkit'
import { SliceName } from '../../const'
import { Employee, Employees, EmployeesEquipments } from '../../types/employees'
import {
  deleteEmployeesAvatarAction,
  fetchEmployeeAction, fetchEmployeesAction, storeEmployeeAction, updateEmployeeAction, updateEmployeesAvatarAction,
} from './employees-api-actions'
import { fetchEmployeeEquipmentAction } from '../api-actions'

export type EmployeesSlice = {
  employee: Employee | null
  employees: Employees | null
  employeesEquipments: EmployeesEquipments | null
}

const initialState: EmployeesSlice = {
  employee: null,
  employees: null,
  employeesEquipments: null,
}

export const employeeSlice = createSlice({
  name: SliceName.Employee,
  initialState,
  reducers: {
    setEmployeeAction: (state, action) => {
      state.employee = action.payload
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchEmployeesAction.fulfilled, (state, action) => {
        state.employees = action.payload
      })
      .addCase(fetchEmployeeAction.fulfilled, (state, action) => {
        state.employee = action.payload
      })
      .addCase(fetchEmployeeEquipmentAction.fulfilled, (state, action) => {
        state.employeesEquipments = action.payload
      })
      .addCase(updateEmployeeAction.fulfilled, (state, action) => {
        state.employee = action.payload
        state.employees = null
      })
      .addCase(storeEmployeeAction.fulfilled, (state) => {
        state.employees = null
      })
      .addCase(updateEmployeesAvatarAction.fulfilled, (state, action) => {
        const employee = state.employee
        if (employee && employee.id === action.payload.id) {
          employee.avatar = action.payload.avatar
          employee.avatarThumb = action.payload.avatarThumb
        }
        state.employee = employee
      })
      .addCase(deleteEmployeesAvatarAction.fulfilled, (state, action) => {
        const employee = state.employee
        if (employee && employee.id === action.payload) {
          employee.avatar = ''
          employee.avatarThumb = ''
        }
        state.employee = employee
      })
  },
})

export const { setEmployeeAction } = employeeSlice.actions
