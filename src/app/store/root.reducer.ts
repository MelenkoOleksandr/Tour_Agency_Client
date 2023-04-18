import { ActionReducerMap } from '@ngrx/store';
import { AuthState, authReducer } from './auth/auth.reducer';

export interface AppState {
  auth: AuthState;
}

export const initialState: AppState = {
  auth: {
    user: null,
    isAuthenticated: false,
    error: null,
  },
};

export const rootReducer: ActionReducerMap<AppState> = {
  auth: authReducer,
};
