import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { APIRoute } from '../../const';
import { Positions } from '../../types/positions';

export const fetchPositionsAction = createAsyncThunk<Positions, undefined, {
  extra: AxiosInstance;
}>(
  'positions/fetch',
  async (_arg, { extra: api }) => {
    const { data } = await api.get(APIRoute.Positions.Index)
    return data
  },
)
