/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk } from '@reduxjs/toolkit'
import { AxiosError, AxiosInstance } from 'axios'
import { APIRoute } from '../../const'
import { Job } from '../../types/jobs'
import { JobsStoreDTO, JobsUpdateDTO } from '@/dto/jobs-dto'
import { ValidationError } from '@/types/validation-error'
import { ID } from '@/types'
import { generatePath } from 'react-router-dom'
import { EmployeesVacations } from '@/types/vacations'

export const fetchEmployeesVacationsAction = createAsyncThunk<EmployeesVacations, undefined, {
  extra: AxiosInstance
}>(
  'vacations/fetchEmployeesVacations',
  async (_arg, { extra: api }) => {
    const { data } = await api.get<EmployeesVacations>(APIRoute.Vacations.Index)
    return data
  },
)

export const storeJobAction = createAsyncThunk<Job, {
  dto: JobsStoreDTO
  errorHandler: (error: ValidationError) => void
  successHandler: (job: Job) => void
}, {
  extra: AxiosInstance
  rejectWithValue: ValidationError
}>(
  'jobs/store',
  async ({ dto, errorHandler, successHandler }, { extra: api, rejectWithValue }) => {
    try {
      const { data } = await api.post<Job>(APIRoute.Jobs.Index, dto)
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

export const updateJobAction = createAsyncThunk<Job, {
  id: ID
  dto: JobsUpdateDTO
  errorHandler: (error: ValidationError) => void
  successHandler: (job: Job) => void
}, {
  extra: AxiosInstance
  rejectWithValue: ValidationError
}>(
  'jobs/update',
  async ({ id, dto, errorHandler, successHandler }, { extra: api, rejectWithValue }) => {
    try {
      const { data } = await api.put<Job>(generatePath(APIRoute.Jobs.Show, { id }), dto)
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

export const deleteJobAction = createAsyncThunk<ID, {
  id: ID
  successHandler: () => void
}, {
  extra: AxiosInstance
}>(
  'jobs/delete',
  async ({ id, successHandler }, { extra: api }) => {
    await api.delete(generatePath(APIRoute.Jobs.Show, { id }))
    successHandler()
    return id
  },
)
