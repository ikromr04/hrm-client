import { AuthorizationStatus, SliceName } from '@/const'
import { createSlice } from '@reduxjs/toolkit'
import { checkAuthAction, loginAction, logoutAction } from './auth-api-actions'
import { User } from '@/types/auth'
import { updateEmployeeAction } from '../employee-slice/employees-api-actions'

export type AuthSlice = {
  authStatus: AuthorizationStatus
  user: User | null
}

const initialState: AuthSlice = {
  authStatus: AuthorizationStatus.Unknown,
  user: null,
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
    }
  },
  extraReducers(builder) {
    builder
      .addCase(checkAuthAction.fulfilled, (state, action) => {
        state.authStatus = AuthorizationStatus.Auth
        state.user = action.payload
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
      .addCase(updateEmployeeAction.fulfilled, (state, action) => {
        if (state.user?.id === action.payload.id) {
          state.user = action.payload
        }
      })
  },
})

export const { setUsersAvatarAction } = authSlice.actions
