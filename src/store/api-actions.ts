/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk } from '@reduxjs/toolkit'
import { AxiosError, AxiosInstance } from 'axios'
import { APIRoute } from '../const'
import { EducationsStoreDTO, EducationsUpdateDTO } from '@/dto/educations-dto'
import { Education } from '@/types/educations'
import { ValidationError } from '@/types/validation-error'
import { generatePath } from 'react-router-dom'
import { ID } from '@/types'
import { ActivitiesStoreDTO, ActivitiesUpdateDTO } from '@/dto/activities-dto'
import { Activity } from '@/types/activities'

// EDUCATIONS ACTIONS

export const storeEducationAction = createAsyncThunk<void, {
  dto: EducationsStoreDTO
  errorHandler: (error: ValidationError) => void
  successHandler: (education: Education) => void
}, {
  extra: AxiosInstance
  rejectValue: ValidationError
}>(
  'educations/store',
  async ({ dto, errorHandler, successHandler }, { extra: api, rejectWithValue }) => {
    try {
      const { data } = await api.post<Education>(APIRoute.Educations.Index, dto)
      successHandler(data)
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

export const updateEducationAction = createAsyncThunk<void, {
  id: ID
  dto: EducationsUpdateDTO
  errorHandler: (error: ValidationError) => void
  successHandler: (education: Education) => void
}, {
  extra: AxiosInstance
  rejectValue: ValidationError
}>(
  'educations/update',
  async ({ id, dto, errorHandler, successHandler }, { extra: api, rejectWithValue }) => {
    try {
      const { data } = await api.put<Education>(generatePath(APIRoute.Educations.Show, { id }), dto)
      successHandler(data)
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

export const deleteEducationAction = createAsyncThunk<void, {
  id: ID
  successHandler: () => void
}, {
  extra: AxiosInstance
}>(
  'educations/delete',
  async ({ id, successHandler }, { extra: api }) => {
    await api.delete(generatePath(APIRoute.Educations.Show, { id }))
    successHandler()
  },
)

// ACTIVITIES ACTIONS

export const storeActivityAction = createAsyncThunk<void, {
  dto: ActivitiesStoreDTO
  errorHandler: (error: ValidationError) => void
  successHandler: (activity: Activity) => void
}, {
  extra: AxiosInstance
  rejectValue: ValidationError
}>(
  'activities/store',
  async ({ dto, errorHandler, successHandler }, { extra: api, rejectWithValue }) => {
    try {
      const { data } = await api.post<Activity>(APIRoute.Activities.Index, dto)
      successHandler(data)
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

export const updateActivityAction = createAsyncThunk<void, {
  id: ID
  dto: ActivitiesUpdateDTO
  errorHandler: (error: ValidationError) => void
  successHandler: (activity: Activity) => void
}, {
  extra: AxiosInstance
  rejectValue: ValidationError
}>(
  'activities/update',
  async ({ id, dto, errorHandler, successHandler }, { extra: api, rejectWithValue }) => {
    try {
      const { data } = await api.put<Activity>(generatePath(APIRoute.Activities.Show, { id }), dto)
      successHandler(data)
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

export const deleteActivityAction = createAsyncThunk<void, {
  id: ID
  successHandler: () => void
}, {
  extra: AxiosInstance
}>(
  'activities/delete',
  async ({ id, successHandler }, { extra: api }) => {
    await api.delete(generatePath(APIRoute.Activities.Show, { id }))
    successHandler()
  },
)
