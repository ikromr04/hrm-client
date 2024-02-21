/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk } from '@reduxjs/toolkit'
import { AxiosError, AxiosInstance } from 'axios'
import { APIRoute } from '../../const'
import { ValidationError } from '@/types/validation-error'
import { ID } from '@/types'
import { generatePath } from 'react-router-dom'
import { Department, Departments } from '@/types/departments'
import { DepartmentsStoreDTO, DepartmentsUpdateDTO } from '@/dto/departments-dto'

export const fetchDepartmentsAction = createAsyncThunk<Departments, undefined, {
  extra: AxiosInstance
}>(
  'departments/fetch',
  async (_arg, { extra: api }) => {
    const { data } = await api.get(APIRoute.Departments.Index)
    return data
  },
)

export const storeDepartmentAction = createAsyncThunk<Department, {
  dto: DepartmentsStoreDTO
  errorHandler: (error: ValidationError) => void
  successHandler: (department: Department) => void
}, {
  extra: AxiosInstance
  rejectWithValue: ValidationError
}>(
  'departments/store',
  async ({ dto, errorHandler, successHandler}, { extra: api, rejectWithValue }) => {
    try {
      const { data } = await api.post<Department>(APIRoute.Departments.Index, dto)
      successHandler(data)
      return data
    } catch (err: any) {
      const error: AxiosError<ValidationError> = err
      
      if (!error.response) {
        throw err
      }
      errorHandler(error.response.data)
      return rejectWithValue(error.response.data)
    }
  },
)

export const updateDepartmentAction = createAsyncThunk<Department, {
  id: ID
  dto: DepartmentsUpdateDTO
  errorHandler: (error: ValidationError) => void
  successHandler: (department: Department) => void
}, {
  extra: AxiosInstance
  rejectWithValue: ValidationError
}>(
  'departments/update',
  async ({ id, dto, errorHandler, successHandler}, { extra: api, rejectWithValue }) => {
    try {
      const { data } = await api.put<Department>(generatePath(APIRoute.Departments.Show, { id }), dto)
      successHandler(data)
      return data
    } catch (err: any) {
      const error: AxiosError<ValidationError> = err
      
      if (!error.response) {
        throw err
      }
      errorHandler(error.response.data)
      return rejectWithValue(error.response.data)
    }
  },
)

export const deleteDepartmentAction = createAsyncThunk<ID, {
  id: ID
  successHandler: () => void
 }, {
  extra: AxiosInstance
}>(
  'departments/delete',
  async ({ id, successHandler }, { extra: api }) => {
    await api.delete(generatePath(APIRoute.Departments.Show, { id }))
    successHandler()
    return id
  },
)

export const fetchDepartmentsTreeAction = createAsyncThunk<Departments, undefined, {
  extra: AxiosInstance
}>(
  'departments/tree',
  async (_arg, { extra: api }) => {
    const { data } = await api.get<Departments>(APIRoute.Departments.Tree)
    return data
  },
)
