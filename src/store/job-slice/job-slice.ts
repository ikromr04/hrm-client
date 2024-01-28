import { createSlice } from '@reduxjs/toolkit';
import { SliceName } from '../../const';
import { Jobs } from '../../types/jobs';
import { deleteJobAction, fetchJobsAction, storeJobAction, updateJobAction } from './job-api-actions';

export type JobSlice = {
  jobs: Jobs | null
}

const initialState: JobSlice = {
  jobs: null
}

export const jobSlice = createSlice({
  name: SliceName.Job,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchJobsAction.fulfilled, (state, action) => {
        state.jobs = action.payload;
      })
      .addCase(storeJobAction.fulfilled, (state, action) => {
        state.jobs = [action.payload, ...(state.jobs || [])];
      })
      .addCase(updateJobAction.fulfilled, (state, action) => {
        if (state.jobs) {
          state.jobs = state.jobs.map((job) => {
            if (job.id === action.payload.id) {
              return action.payload
            }
            return job
          });
        }
      })
      .addCase(deleteJobAction.fulfilled, (state, action) => {
        if (state.jobs) {
          state.jobs = state.jobs.filter(({ id }) => id !== action.payload);
        }
      })
  },
})
