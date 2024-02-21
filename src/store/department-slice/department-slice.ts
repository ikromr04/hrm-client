import { createSlice } from '@reduxjs/toolkit'
import { SliceName } from '../../const'
import { Departments } from '@/types/departments'
import {
  deleteDepartmentAction,
  fetchDepartmentsAction,
  fetchDepartmentsTreeAction,
  storeDepartmentAction,
  updateDepartmentAction,
} from './department-api-actions'

export type JobSlice = {
  departments: Departments | null
  tree: Departments | null
}

const initialState: JobSlice = {
  departments: null,
  tree: null,
}

export const departmentSlice = createSlice({
  name: SliceName.Department,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchDepartmentsAction.fulfilled, (state, action) => {
        state.departments = action.payload
      })
      .addCase(storeDepartmentAction.fulfilled, (state, action) => {
        state.departments = [action.payload, ...(state.departments || [])]
      })
      .addCase(updateDepartmentAction.fulfilled, (state, action) => {
        if (state.departments) {
          state.departments = state.departments.map((department) => {
            if (department.id === action.payload.id) {
              return action.payload
            }
            return department
          })
        }
      })
      .addCase(deleteDepartmentAction.fulfilled, (state, action) => {
        if (state.departments) {
          state.departments = state.departments.filter(({ id }) => id !== action.payload)
        }
      })
      .addCase(fetchDepartmentsTreeAction.fulfilled, (state, action) => {
        state.tree = action.payload
      })
  },
})
