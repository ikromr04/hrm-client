/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk } from '@reduxjs/toolkit'
import { AxiosError, AxiosInstance } from 'axios'
import { APIRoute } from '../../const'
import { generatePath } from 'react-router-dom'
import { Employee, Employees } from '@/types/employees'
import { ID } from '@/types'
import { EmployeesStoreDTO, EmployeesUpdateDTO } from '@/dto/employees-dto'
import { ValidationError } from '@/types/validation-error'
import { Educations } from '@/types/educations'
import { Activities } from '@/types/activities'
import { EmployeesUpdateAvatarResponse } from '@/responses/employees'

export const fetchEmployeesAction = createAsyncThunk<Employees, undefined, {
  extra: AxiosInstance
}>(
  'employees/fetch',
  async (_arg, { extra: api }) => {
    const { data } = await api.get<Employees>(APIRoute.Employees.Index)
    return data
  },
)

export const fetchEmployeeAction = createAsyncThunk<Employee, {
  id: ID
}, {
  extra: AxiosInstance
}>(
  'employees/fetchById',
  async ({ id }, { extra: api }) => {
    const { data } = await api.get<Employee>(generatePath(APIRoute.Employees.Show, { id }))
    return data
  },
)

export const storeEmployeeAction = createAsyncThunk<Employee, {
  dto: EmployeesStoreDTO
  errorHandler: (error: ValidationError) => void
  successHandler: (employee: Employee) => void
}, {
  extra: AxiosInstance
  rejectWithValue: ValidationError
}>(
  'employees/store',
  async (arg, { extra: api, rejectWithValue }) => {
    const { dto, errorHandler, successHandler } = arg
    try {
      const { data } = await api.post<Employee>(APIRoute.Employees.Index, dto)
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

export const updateEmployeeAction = createAsyncThunk<Employee, {
  id: ID
  dto: EmployeesUpdateDTO
  errorHandler: (error: ValidationError) => void
  successHandler: () => void
}, {
  extra: AxiosInstance
  rejectWithValue: ValidationError
}>(
  'employees/update',
  async (arg, { extra: api, rejectWithValue }) => {
    const { dto, id, errorHandler, successHandler } = arg
    try {
      const { data } = await api.put<Employee>(generatePath(APIRoute.Employees.Show, { id }), dto)
      successHandler()
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

export const updateEmployeesAvatarAction = createAsyncThunk<{
  id: ID
  avatar: string
  avatarThumb: string
}, {
  formData: FormData
  id: ID
  successHandler: () => void
 }, {
  extra: AxiosInstance
  rejectWithValue: ValidationError
}>(
  'employees/updateAvatar',
  async ({ formData, id, successHandler }, { extra: api, rejectWithValue }) => {
    formData.append('_method', 'put')
    try {
      const { data } = await api.post<EmployeesUpdateAvatarResponse>(generatePath(APIRoute.Employees.Avatar, { id }), formData)
      successHandler()
      return {
        id,
        ...data
      }
    } catch (err: any) {
      const error: AxiosError<ValidationError> = err
      if (!error.response) {
        throw err
      }
      return rejectWithValue(error.response.data)
    }
  },
)

export const deleteEmployeesAvatarAction = createAsyncThunk<ID, {
  id: ID
  successHandler: () => void
 }, {
  extra: AxiosInstance
}>(
  'employees/deleteAvatar',
  async ({ id, successHandler }, { extra: api }) => {
    await api.delete(generatePath(APIRoute.Employees.Avatar, { id }))
    successHandler()
    return id
  },
)

export const fetchEmployeesEducationsAction = createAsyncThunk<void, {
  id: ID
  successHandler: (educations: Educations) => void
}, {
  extra: AxiosInstance
}>(
  'employees/fetchEducations',
  async ({ id, successHandler }, { extra: api }) => {
    const { data } = await api.get<Educations>(generatePath(APIRoute.Employees.Educations, { id }))
    successHandler(data)
  },
)

export const fetchEmployeesActivitiesAction = createAsyncThunk<void, {
  id: ID
  successHandler: (activities: Activities) => void
}, {
  extra: AxiosInstance
}>(
  'employees/fetchActivities',
  async ({ id, successHandler }, { extra: api }) => {
    const { data } = await api.get<Activities>(generatePath(APIRoute.Employees.Activities, { id }))
    successHandler(data)
  },
)
