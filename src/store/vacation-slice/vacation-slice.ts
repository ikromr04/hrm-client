import { createSlice } from '@reduxjs/toolkit'
import { SliceName } from '../../const'
import { EmployeesVacations } from '@/types/vacations'
import { fetchEmployeesVacationsAction } from './vacation-api-actions'

export type VactionsSlice = {
  employeesVacations: EmployeesVacations | null
}

const initialState: VactionsSlice = {
  employeesVacations: null
}

export const vacationsSlice = createSlice({
  name: SliceName.Vacation,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchEmployeesVacationsAction.fulfilled, (state, action) => {
        state.employeesVacations = action.payload
      })
  },
})
