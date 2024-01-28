/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError, AxiosInstance } from 'axios';
import { APIRoute } from '../../const';
import { Language, Languages } from '../../types/languages';
import { LanguagesStoreDTO, LanguagesUpdateDTO } from '@/dto/languages-dto';
import { ValidationError } from '@/types/validation-error';
import { ID } from '@/types';
import { generatePath } from 'react-router-dom';

export const fetchLanguagesAction = createAsyncThunk<Languages, undefined, {
  extra: AxiosInstance
}>(
  'languages/fetchLanguages',
  async (_arg, { extra: api }) => {
    const { data } = await api.get<Languages>(APIRoute.Languages.Index)
    return data
  },
)

export const storeLanguageAction = createAsyncThunk<Language, {
  dto: LanguagesStoreDTO
  errorHandler: (error: ValidationError) => void
  successHandler: (language: Language) => void
}, {
  extra: AxiosInstance
  rejectWithValue: ValidationError
}>(
  'languages/store',
  async ({ dto, errorHandler, successHandler}, { extra: api, rejectWithValue }) => {
    try {
      const { data } = await api.post<Language>(APIRoute.Languages.Index, dto)
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

export const updateLanguageAction = createAsyncThunk<Language, {
  id: ID
  dto: LanguagesUpdateDTO
  errorHandler: (error: ValidationError) => void
  successHandler: (language: Language) => void
}, {
  extra: AxiosInstance
  rejectWithValue: ValidationError
}>(
  'languages/update',
  async ({ id, dto, errorHandler, successHandler}, { extra: api, rejectWithValue }) => {
    try {
      const { data } = await api.put<Language>(generatePath(APIRoute.Languages.Show, { id }), dto)
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

export const deleteLanguageAction = createAsyncThunk<ID, {
  id: ID
  successHandler: () => void
 }, {
  extra: AxiosInstance
}>(
  'languages/delete',
  async ({ id, successHandler }, { extra: api }) => {
    await api.delete(generatePath(APIRoute.Languages.Show, { id }))
    successHandler()
    return id
  },
)
