import { createReducer, on } from '@ngrx/store';
import { ITour } from 'src/app/models/Tour';
import { TourActions } from './tour.actions';

export interface TourState {
  tours: ITour[];
  tour: ITour | null;
  isLoading: boolean;
  error: string | null;
}

export const initialState: TourState = {
  tours: [],
  tour: null,
  isLoading: false,
  error: null,
};

export const tourReducer = createReducer(
  initialState,
  on(TourActions.getAllTours, (state) => ({
    ...state,
    isLoading: true,
    error: null,
  })),
  on(TourActions.getAllToursSuccess, (state, { tours }) => ({
    ...state,
    tours,
    isLoading: false,
    error: null,
  })),
  on(TourActions.getAllToursFailure, (state, { error }) => ({
    ...state,
    isLoading: false,
    error,
  })),
  on(TourActions.getTour, (state) => ({
    ...state,
    isLoading: true,
    error: null,
  })),
  on(TourActions.getTourSuccess, (state, { tour }) => ({
    ...state,
    tour,
    isLoading: false,
    error: null,
  })),
  on(TourActions.getTourFailure, (state, { error }) => ({
    ...state,
    isLoading: false,
    error,
  })),
  on(TourActions.createTour, (state) => ({
    ...state,
    isLoading: true,
    error: null,
  })),
  on(TourActions.createTourSuccess, (state, { tour }) => ({
    ...state,
    tours: [...state.tours, tour],
    isLoading: false,
    error: null,
  })),
  on(TourActions.createTourFailure, (state, { error }) => ({
    ...state,
    isLoading: false,
    error,
  })),
  on(TourActions.updateTour, (state) => ({
    ...state,
    isLoading: true,
    error: null,
  })),
  on(TourActions.updateTourSuccess, (state, { tour }) => ({
    ...state,
    tours: state.tours.map((t) => (t.id === tour.id ? tour : t)),
    isLoading: false,
    error: null,
  })),
  on(TourActions.updateTourFailure, (state, { error }) => ({
    ...state,
    isLoading: false,
    error,
  })),
  on(TourActions.deleteTour, (state) => ({
    ...state,
    isLoading: true,
    error: null,
  })),
  on(TourActions.deleteTourSuccess, (state, { id }) => ({
    ...state,
    tours: state.tours.filter((t) => t.id !== id),
    isLoading: false,
    error: null,
  })),
  on(TourActions.deleteTourFailure, (state, { error }) => ({
    ...state,
    isLoading: false,
    error,
  }))
);
