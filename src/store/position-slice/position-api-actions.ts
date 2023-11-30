import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { APIRoute } from '../../const';
import { Positions } from '../../types/position';
import { adaptPositionsToClient } from '../../adapters/positions';

export const fetchPositionsAction = createAsyncThunk<Positions, undefined, {
  extra: AxiosInstance;
}>(
  'positions/fetchPositions',
  async (_arg, { extra: api }) => {
    const { data } = await api.get(APIRoute.Positions);
    return adaptPositionsToClient(data);
  },
);
