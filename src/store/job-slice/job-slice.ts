import { createSlice } from '@reduxjs/toolkit';
import { SliceName } from '../../const';
import { Jobs } from '../../types/job';
import { fetchJobsAction } from './job-api-actions';

export type JobSlice = {
  jobs: Jobs | null;
};

const initialState: JobSlice = {
  jobs: null,
};

export const jobSlice = createSlice({
  name: SliceName.Job,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchJobsAction.fulfilled, (state, action) => {
        state.jobs = action.payload;
      });
  },
});
