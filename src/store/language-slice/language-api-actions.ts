import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { APIRoute } from '../../const';
import { Languages } from '../../types/language';
import { adaptLanguagesToClient } from '../../adapters/languages';

export const fetchLanguagesAction = createAsyncThunk<Languages, undefined, {
  extra: AxiosInstance;
}>(
  'languages/fetchLanguages',
  async (_arg, { extra: api }) => {
    const { data } = await api.get(APIRoute.Languages);
    return adaptLanguagesToClient(data);
  },
);
