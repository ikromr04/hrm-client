import { AuthorizationStatus, SliceName } from '@/const'
import { createSlice } from '@reduxjs/toolkit'
import { checkAuthAction, loginAction, logoutAction } from './auth-api-actions'
import { User } from '@/types/auth'
import { deleteEmployeesAvatarAction, updateEmployeeAction, updateEmployeesAvatarAction } from '../employee-slice/employees-api-actions'

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
        user.avatar = action.payload.avatar
        user.avatarThumb = action.payload.avatarThumb
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
          state.user = {
            ...state.user,
            name: action.payload.name,
            surname: action.payload.surname,
            patronymic: action.payload.patronymic,
            login: action.payload.login,
            avatar: action.payload.avatar,
            avatarThumb: action.payload.avatarThumb,
            startedWorkAt: action.payload.startedWorkAt,
          }
        }
      })
      .addCase(updateEmployeesAvatarAction.fulfilled, (state, action) => {
        const user = state.user
        if (user && user.id === action.payload.id) {
          user.avatar = action.payload.avatar
          user.avatarThumb = action.payload.avatarThumb
        }
        state.user = user
      })
      .addCase(deleteEmployeesAvatarAction.fulfilled, (state, action) => {
        const user = state.user
        if (user && user.id === action.payload) {
          user.avatar = ''
          user.avatarThumb = ''
        }
        state.user = user
      })
  },
})

export const { setUsersAvatarAction } = authSlice.actions
