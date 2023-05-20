import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { IReservation } from '../../models/Reservation';

export const ReservationActions = createActionGroup({
  source: 'RESERVATION',
  events: {
    'Get All Reservations': emptyProps(),
    'Get All Reservations Success': props<{ reservations: IReservation[] }>(),
    'Get All Reservations Failure': props<{ error: string }>(),
    'Create Reservation': props<{ reservation: IReservation }>(),
    'Create Reservation Success': props<{ reservation: IReservation}>(),
    'Create Reservation Failure': props<{ error: string }>(),
    'Update Reservation': props<{ reservation: IReservation }>(),
    'Update Reservation Success': props<{ reservation: IReservation }>(),
    'Update Reservation Failure': props<{ error: string }>(),
    'Delete Reservation': props<{ id: number }>(),
    'Delete Reservation Success': props<{ id: number }>(),
    'Delete Reservation Failure': props<{ error: string }>(),
  },
});
