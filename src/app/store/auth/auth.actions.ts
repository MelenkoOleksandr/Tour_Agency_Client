import { createAction, props } from '@ngrx/store';
import { AuthResponse, IUser, IUserCredentials } from 'src/app/models/User';

export const loadUser = createAction('[Auth] Load User');

export const login = createAction(
  '[Auth] Login',
  props<IUserCredentials>()
);

export const register = createAction(
  '[Auth] Register',
  props<IUserCredentials>()
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
