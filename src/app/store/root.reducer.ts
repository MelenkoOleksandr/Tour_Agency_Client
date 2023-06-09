import { ActionReducerMap } from '@ngrx/store';
import { AuthState, authReducer } from './auth/auth.reducer';
import { TourState, tourReducer } from './tour/tour.reducer';
import { ReservationState, reservationReducer } from './reservation/reservation.reducer';

export interface AppState {
  auth: AuthState;
  tour: TourState;
  reservation: ReservationState;
}

export const initialState: AppState = {
  auth: {
    user: null,
    isAuthenticated: false,
    error: null,
  },
  tour: {
    tours: [],
    tour: null,
    isLoading: false,
    error: null,
  },
  reservation: {
    reservations: [],
    isLoading: false,
    error: null,
  },
};

export const rootReducer: ActionReducerMap<AppState> = {
  auth: authReducer,
  tour: tourReducer,
  reservation: reservationReducer,
};
