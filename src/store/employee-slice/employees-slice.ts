import { createSlice } from '@reduxjs/toolkit'
import { SliceName } from '../../const'
import { Employee, Employees } from '../../types/employees'
import {
  fetchEmployeeAction, updateEmployeeAction,
} from './employees-api-actions'

export type EmployeesSlice = {
  employee: Employee | null
  employees: Employees | null
}

const initialState: EmployeesSlice = {
  employee: null,
  employees: null,
}

export const employeeSlice = createSlice({
  name: SliceName.Employee,
  initialState,
  reducers: {
    setEmployeesAvatarAction: (state, action) => {
      const employee = state.employee
      if (employee) {
        employee.avatar = action.payload
      }
      state.employee = employee
    },
    setEmployeeAction: (state, action) => {
      state.employee = action.payload
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchEmployeeAction.fulfilled, (state, action) => {
        state.employee = action.payload
      })
      .addCase(updateEmployeeAction.fulfilled, (state, action) => {
        state.employee = action.payload
      })
  },
})

export const { setEmployeesAvatarAction, setEmployeeAction } = employeeSlice.actions
