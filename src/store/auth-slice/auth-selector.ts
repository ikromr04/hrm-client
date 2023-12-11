import { AuthUser } from '@/types/auth';
import { AuthorizationStatus, SliceName } from '../../const';
import { State } from '../../types/state';

export const getAuthStatus = (state: State): AuthorizationStatus =>
  state[SliceName.Auth].authStatus;

export const getAuthUser = (state: State): AuthUser | null =>
  state[SliceName.Auth].authUser;

export const getAuthAvatar = (state: State): string =>
  state[SliceName.Auth].authAvatar;
