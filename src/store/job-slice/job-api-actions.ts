import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { APIRoute } from '../../const';
import { Jobs } from '../../types/job';
import { adaptJobsToClient } from '../../adapters/jobs';

export const fetchJobsAction = createAsyncThunk<Jobs, undefined, {
  extra: AxiosInstance;
}>(
  'jobs/fetchJobs',
  async (_arg, { extra: api }) => {
    const { data } = await api.get(APIRoute.Jobs);
    return adaptJobsToClient(data);
  },
);
