import { createSlice } from '@reduxjs/toolkit';
import { SliceName } from '../../const';
import { Languages } from '../../types/languages';
import { deleteLanguageAction, fetchLanguagesAction, storeLanguageAction, updateLanguageAction } from './language-api-actions';

export type LanguageSlice = {
  languages: Languages | null
}

const initialState: LanguageSlice = {
  languages: null
}

export const languageSlice = createSlice({
  name: SliceName.Language,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchLanguagesAction.fulfilled, (state, action) => {
        state.languages = action.payload
      })
      .addCase(storeLanguageAction.fulfilled, (state, action) => {
        state.languages = [action.payload, ...(state.languages || [])]
      })
      .addCase(updateLanguageAction.fulfilled, (state, action) => {
        if (state.languages) {
          state.languages = state.languages.map((position) => {
            if (position.id === action.payload.id) {
              return action.payload
            }
            return position
          })
        }
      })
      .addCase(deleteLanguageAction.fulfilled, (state, action) => {
        if (state.languages) {
          state.languages = state.languages.filter(({ id }) => id !== action.payload)
        }
      })
  },
})
