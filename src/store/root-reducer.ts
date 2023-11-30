import { combineReducers } from '@reduxjs/toolkit';
import { employeeSlice } from './employees-slice/employees-slice';
import { SliceName } from '../const';
import { jobSlice } from './job-slice/job-slice';
import { positionSlice } from './position-slice/position-slice';
import { languageSlice } from './language-slice/language-slice';
import { appSlice } from './app-slice/app-slice';

export const rootReducer = combineReducers({
  [SliceName.App]: appSlice.reducer,
  [SliceName.Employee]: employeeSlice.reducer,
  [SliceName.Job]: jobSlice.reducer,
  [SliceName.Position]: positionSlice.reducer,
  [SliceName.Language]: languageSlice.reducer,
});
