/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk } from '@reduxjs/toolkit'
import { AxiosError, AxiosInstance } from 'axios'
import { APIRoute } from '../../const'
import { dropToken, saveToken } from '../../services/token'
import { ValidationError } from '../../types/validation-error'
import { AuthUser } from '@/types/auth'
import { LoginDTO } from '@/dto/auth'
import { LoginResponse } from '@/response/auth'

export const checkAuthAction = createAsyncThunk<AuthUser, undefined, {
  extra: AxiosInstance
}>(
  'auth/checkAuth',
  async (_arg, { extra: api }) => {
    const { data } = await api.get<AuthUser>(APIRoute.Auth.Login)
    return data
  },
)

export const loginAction = createAsyncThunk<AuthUser, {
  dto: LoginDTO,
  errorHandler: (error: ValidationError) => void
}, {
  extra: AxiosInstance
  rejectValue: ValidationError
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
    await api.delete(APIRoute.Auth.Logout)
    dropToken()
  },
)
