import { createSlice } from '@reduxjs/toolkit';
import { SliceName } from '../../const';
import { Languages } from '../../types/language';
import { fetchLanguagesAction } from './language-api-actions';

export type LanguageSlice = {
  languages: Languages | null;
};

const initialState: LanguageSlice = {
  languages: null,
};

export const languageSlice = createSlice({
  name: SliceName.Language,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchLanguagesAction.fulfilled, (state, action) => {
        state.languages = action.payload;
      });
  },
});
