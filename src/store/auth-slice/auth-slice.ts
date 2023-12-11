import { AuthorizationStatus, SliceName } from '@/const';
import { createSlice } from '@reduxjs/toolkit';
import { checkAuthAction, loginAction, logoutAction } from './auth-api-actions';
import { AuthUser } from '@/types/auth';

export type AuthSlice = {
  authStatus: AuthorizationStatus
  authUser: AuthUser | null
  authAvatar: string
}

const initialState: AuthSlice = {
  authStatus: AuthorizationStatus.Unknown,
  authUser: null,
  authAvatar: '',
}

export const authSlice = createSlice({
  name: SliceName.Auth,
  initialState,
  reducers: {
    setAuthAvatarAction: (state, action) => {
      state.authAvatar = action.payload
    },
  },
  extraReducers(builder) {
    builder
      .addCase(checkAuthAction.fulfilled, (state, action) => {
        state.authStatus = AuthorizationStatus.Auth
        state.authUser = action.payload
        state.authAvatar = action.payload.avatar
      })
      .addCase(checkAuthAction.rejected, (state) => {
        state.authStatus = AuthorizationStatus.NoAuth
      })
      .addCase(loginAction.fulfilled, (state, action) => {
        state.authStatus = AuthorizationStatus.Auth
        state.authUser = action.payload
      })
      .addCase(loginAction.rejected, (state) => {
        state.authStatus = AuthorizationStatus.NoAuth
      })
      .addCase(logoutAction.fulfilled, (state) => {
        state.authStatus = AuthorizationStatus.NoAuth
      })
  },
})

export const { setAuthAvatarAction } = authSlice.actions
