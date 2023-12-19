import { AuthorizationStatus, SliceName } from '@/const';
import { createSlice } from '@reduxjs/toolkit';
import { checkAuthAction, loginAction, logoutAction } from './auth-api-actions';
import { AuthUser } from '@/types/auth';

export type AuthSlice = {
  authStatus: AuthorizationStatus
  user: AuthUser | null
  authAvatar: string
}

const initialState: AuthSlice = {
  authStatus: AuthorizationStatus.Unknown,
  user: null,
  authAvatar: '',
}

export const authSlice = createSlice({
  name: SliceName.Auth,
  initialState,
  reducers: {
    setUsersAvatarAction: (state, action) => {
      const user = state.user
      if (user) {
        user.avatar = action.payload
      }
      state.user = user
    },
  },
  extraReducers(builder) {
    builder
      .addCase(checkAuthAction.fulfilled, (state, action) => {
        state.authStatus = AuthorizationStatus.Auth
        state.user = action.payload
        state.authAvatar = action.payload.avatar
      })
      .addCase(checkAuthAction.rejected, (state) => {
        state.authStatus = AuthorizationStatus.NoAuth
      })
      .addCase(loginAction.fulfilled, (state, action) => {
        state.authStatus = AuthorizationStatus.Auth
        state.user = action.payload
      })
      .addCase(loginAction.rejected, (state) => {
        state.authStatus = AuthorizationStatus.NoAuth
      })
      .addCase(logoutAction.fulfilled, (state) => {
        state.authStatus = AuthorizationStatus.NoAuth
      })
  },
})

export const { setUsersAvatarAction } = authSlice.actions
