/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk } from '@reduxjs/toolkit'
import { AxiosError, AxiosInstance } from 'axios'
import { APIRoute } from '../../const'
import { dropToken, saveToken } from '../../services/token'
import { ValidationError } from '../../types/validation-error'
import { AuthStoreDTO, LoginDTO } from '@/dto/auth-dto'
import { AuthStoreResponse, LoginResponse } from '@/responses/auth-reponses'
import { User } from '@/types/auth'

export const checkAuthAction = createAsyncThunk<User, undefined, {
  extra: AxiosInstance
}>(
  'auth/check',
  async (_arg, { extra: api }) => {
    const { data } = await api.get<User>(APIRoute.Auth.Login)
    return data
  },
)

export const loginAction = createAsyncThunk<User, {
  dto: LoginDTO,
  errorHandler: (error: ValidationError) => void
}, {
  extra: AxiosInstance
  rejectWithValue: ValidationError
}>(
  'auth/login',
  async ({ dto, errorHandler }, { extra: api, rejectWithValue }) => {
    try {
      const { data } = await api.post<LoginResponse>(APIRoute.Auth.Login, dto)
      saveToken(data.token)
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

export const logoutAction = createAsyncThunk<void, undefined, {
  extra: AxiosInstance
}>(
  'auth/logout',
  async (_arg, { extra: api }) => {
    await api.delete(APIRoute.Auth.Login)
    dropToken()
  },
)

export const storeAuthAction = createAsyncThunk<void, {
  dto: AuthStoreDTO
  errorHandler: (error: ValidationError) => void
  successHandler: (response: AuthStoreResponse) => void
}, {
  extra: AxiosInstance
  rejectWithValue: ValidationError
}>(
  'auth/store',
  async ({ dto, errorHandler, successHandler }, { extra: api, rejectWithValue }) => {
    try {
      const { data } = await api.post<AuthStoreResponse>(APIRoute.Auth.Index, dto)
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
