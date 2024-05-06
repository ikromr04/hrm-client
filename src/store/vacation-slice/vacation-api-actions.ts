import { createAsyncThunk } from '@reduxjs/toolkit'
import { AxiosInstance } from 'axios'
import { APIRoute } from '../../const'
import { EmployeesVacations } from '@/types/vacations'
import { VacationsUpdateDTO } from '@/dto/vacations-dto'

export const fetchEmployeesVacationsAction = createAsyncThunk<EmployeesVacations, undefined, {
  extra: AxiosInstance
}>(
  'vacations/fetchEmployeesVacations',
  async (_arg, { extra: api }) => {
    const { data } = await api.get<EmployeesVacations>(APIRoute.Vacations.Index)
    return data
  },
)

export const updateVacationAction = createAsyncThunk<EmployeesVacations, {
  dto: VacationsUpdateDTO
}, {
  extra: AxiosInstance
}>(
  'vacations/update',
  async ({ dto }, { extra: api }) => {
    const { data } = await api.put<EmployeesVacations>(APIRoute.Vacations.Index, dto)
    return data
  },
)
