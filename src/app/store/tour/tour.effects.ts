import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { TourService } from 'src/app/services/tour.service';
import { TourActions } from './tour.actions';
import { of, mergeMap, catchError, map } from 'rxjs';

@Injectable()
export class TourEffects {
  constructor(private actions$: Actions, private tourService: TourService) {}

  getAllTours$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TourActions.getAllTours),
      mergeMap(() =>
        this.tourService.getTours().pipe(
          map((tours) => TourActions.getAllToursSuccess({ tours })),
          catchError((error) => of(TourActions.getAllToursFailure({ error })))
        )
      )
    )
  );

  getTour$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TourActions.getTour),
      mergeMap((action) =>
        this.tourService.getTour(action.id).pipe(
          map((tour) => TourActions.getTourSuccess({ tour })),
          catchError((error) => of(TourActions.getTourFailure({ error })))
        )
      )
    )
  );

  createTour$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TourActions.createTour),
      mergeMap((action) =>
        this.tourService.createTour(action.tour).pipe(
          map((tour) => TourActions.createTourSuccess({ tour })),
          catchError((error) => of(TourActions.createTourFailure({ error })))
        )
      )
    )
  );

  updateTour$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TourActions.updateTour),
      mergeMap((action) =>
        this.tourService.updateTour(action.tour).pipe(
          map((tour) => TourActions.updateTourSuccess({ tour })),
          catchError((error) => of(TourActions.updateTourFailure({ error })))
        )
      )
    )
  );

  deleteTour$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TourActions.deleteTour),
      mergeMap((action) =>
        this.tourService.deleteTour(action.id).pipe(
          map(() => TourActions.deleteTourSuccess({ id: action.id })),
          catchError((error) => of(TourActions.deleteTourFailure({ error })))
        )
      )
    )
  );
}
