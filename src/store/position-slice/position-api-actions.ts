/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError, AxiosInstance } from 'axios';
import { APIRoute } from '../../const';
import { Position, Positions } from '../../types/positions';
import { PositionsStoreDTO, PositionsUpdateDTO } from '@/dto/positions-dto';
import { ValidationError } from '@/types/validation-error';
import { ID } from '@/types';
import { generatePath } from 'react-router-dom';

export const fetchPositionsAction = createAsyncThunk<Positions, undefined, {
  extra: AxiosInstance;
}>(
  'positions/fetch',
  async (_arg, { extra: api }) => {
    const { data } = await api.get(APIRoute.Positions.Index)
    return data
  },
)

export const storePositionAction = createAsyncThunk<Position, {
  dto: PositionsStoreDTO
  errorHandler: (error: ValidationError) => void
  successHandler: (position: Position) => void
}, {
  extra: AxiosInstance
  rejectWithValue: ValidationError
}>(
  'positions/store',
  async ({ dto, errorHandler, successHandler}, { extra: api, rejectWithValue }) => {
    try {
      const { data } = await api.post<Position>(APIRoute.Positions.Index, dto)
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

export const updatePositionAction = createAsyncThunk<Position, {
  id: ID
  dto: PositionsUpdateDTO
  errorHandler: (error: ValidationError) => void
  successHandler: (position: Position) => void
}, {
  extra: AxiosInstance
  rejectWithValue: ValidationError
}>(
  'positions/update',
  async ({ id, dto, errorHandler, successHandler}, { extra: api, rejectWithValue }) => {
    try {
      const { data } = await api.put<Position>(generatePath(APIRoute.Positions.Show, { id }), dto)
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

export const deletePositionAction = createAsyncThunk<void, {
  id: ID
  successHandler: () => void
 }, {
  extra: AxiosInstance
}>(
  'positions/delete',
  async ({ id, successHandler }, { extra: api }) => {
    await api.delete(generatePath(APIRoute.Positions.Show, { id }))
    successHandler()
  },
)
