import { createReducer, on } from '@ngrx/store';
import { ReservationActions } from './reservation.actions';
import { IReservation } from 'src/app/models/Reservation';

export interface ReservationState {
  reservations: IReservation[];
  isLoading: boolean;
  error: string | null;
}

export const initialState: ReservationState = {
  reservations: [],
  isLoading: false,
  error: null,
};

export const reservationReducer = createReducer(
  initialState,
  on(ReservationActions.getAllReservations, (state) => ({
    ...state,
    isLoading: true,
    error: null,
  })),
  on(
    ReservationActions.getAllReservationsSuccess,
    (state, { reservations }) => ({
      ...state,
      reservations,
      isLoading: false,
      error: null,
    })
  ),
  on(ReservationActions.getAllReservationsFailure, (state, { error }) => ({
    ...state,
    isLoading: false,
    error,
  })),
  on(ReservationActions.createReservation, (state) => ({
    ...state,
    isLoading: true,
    error: null,
  })),

  on(ReservationActions.createReservationSuccess, (state, { reservation }) => ({
    ...state,
    reservations: [...state.reservations, reservation],
    isLoading: false,
    error: null,
  })),
  on(ReservationActions.createReservationFailure, (state, { error }) => ({
    ...state,
    isLoading: false,
    error,
  })),
  on(ReservationActions.updateReservation, (state) => ({
    ...state,
    isLoading: true,
    error: null,
  })),

  on(ReservationActions.updateReservationFailure, (state, { error }) => ({
    ...state,
    isLoading: false,
    error,
  })),
  on(ReservationActions.deleteReservation, (state) => ({
    ...state,
    isLoading: true,
    error: null,
  })),

  on(ReservationActions.deleteReservationFailure, (state, { error }) => ({
    ...state,
    isLoading: false,
    error,
  }))
);
