import { createAsyncThunk } from '@reduxjs/toolkit'
import { AxiosInstance } from 'axios'
import { APIRoute } from '../../const'
import { Jobs } from '../../types/jobs'

export const fetchJobsAction = createAsyncThunk<Jobs, undefined, {
  extra: AxiosInstance;
}>(
  'jobs/fetch',
  async (_arg, { extra: api }) => {
    const { data } = await api.get(APIRoute.Jobs.Index)
    return data
  },
)
