import { createAction, props } from '@ngrx/store';
import {
  AuthResponse,
  IUserRegisterCredentials,
  IUserCredentials,
} from 'src/app/models/User';

export const loadUser = createAction('[Auth] Load User');

export const login = createAction(
  '[Auth] Login',
  props<IUserCredentials>()
);

export const register = createAction(
  '[Auth] Register',
  props<IUserRegisterCredentials>()
);

export const registerSuccess = createAction(
  '[Auth] Register Success',
  props<AuthResponse>()
);

export const registerFailure = createAction(
  '[Auth] Register Failure',
  props<{ error: string }>()
);

export const loginSuccess = createAction(
  '[Auth] Login Success',
  props<AuthResponse>()
);

export const loginFailure = createAction(
  '[Auth] Login Failure',
  props<{ error: string }>()
);

export const logout = createAction('[Auth] Logout');
export const logoutSuccess = createAction('[Auth] Logout Success');
export const logoutFailure = createAction('[Auth] Logout Failure');
