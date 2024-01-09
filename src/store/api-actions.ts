import { createAsyncThunk } from '@reduxjs/toolkit'
import { AxiosError, AxiosInstance } from 'axios'
import { APIRoute } from '../const'
import { EducationsStoreDTO } from '@/dto/educations-dto'
import { Education } from '@/types/educations'
import { ValidationError } from '@/types/validation-error'

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
