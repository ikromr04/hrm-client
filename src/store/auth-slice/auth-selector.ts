import { User } from '@/types/auth';
import { AuthorizationStatus, SliceName } from '../../const';
import { State } from '../../types/state';

export const getAuthStatus = (state: State): AuthorizationStatus =>
  state[SliceName.Auth].authStatus;

export const getUser = (state: State): User | null =>
  state[SliceName.Auth].user;
