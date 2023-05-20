import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ReservationsService } from 'src/app/services/reservations.service';
import { ReservationActions } from './reservation.actions';
import { of, mergeMap, catchError, map } from 'rxjs';

@Injectable()
export class ReservationEffects {
  constructor(
    private actions$: Actions,
    private reservationService: ReservationsService
  ) {}

  getAllReservations$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ReservationActions.getAllReservations),
      mergeMap(() =>
        this.reservationService.getReservations().pipe(
          map((reservations) =>
            ReservationActions.getAllReservationsSuccess({ reservations })
          ),
          catchError((error) =>
            of(ReservationActions.getAllReservationsFailure({ error }))
          )
        )
      )
    )
  );

  deleteReservation$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ReservationActions.deleteReservation),
      mergeMap(({ id }) =>
        this.reservationService.cancelReservation(id).pipe(
          map(() => ReservationActions.deleteReservationSuccess({ id: id })),
          catchError((error) =>
            of(ReservationActions.deleteReservationFailure({ error }))
          )
        )
      )
    )
  );
}
