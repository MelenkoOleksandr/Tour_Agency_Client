import { createReducer, on } from '@ngrx/store';
import {
  login,
  loginSuccess,
  loginFailure,
  logout,
  loadUser,
} from './auth.actions';
import { IUser } from 'src/app/models/User';

export interface AuthState {
  isAuthenticated: boolean;
  user: IUser | null;
  error: string | null;
}

export const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
  error: null,
};

export const authReducer = createReducer(
  initialState,
  on(loadUser, (state) => {
    const user = JSON.parse(localStorage.getItem('user') || 'null');
    return { ...state, isAuthenticated: !!user, user };
  }),
  on(login, (state) => ({ ...state, error: null })),
  on(loginSuccess, (state, authData) => {
    localStorage.setItem('user', JSON.stringify(authData.user));
    localStorage.setItem('refreshToken', authData.refreshToken);
    return { ...state, isAuthenticated: true, user: authData.user, error: null };
  }),
  on(loginFailure, (state, { error }) => ({
    ...state,
    isAuthenticated: false,
    user: null,
    error,
  })),
  on(logout, (state) => {
    localStorage.removeItem('user');
    return { ...state, isAuthenticated: false, user: null, error: null };
  })
);
