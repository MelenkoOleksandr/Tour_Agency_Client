import { Component, OnInit } from '@angular/core';
import { AppState } from '@auth0/auth0-angular';
import { Store } from '@ngrx/store';
import { IReservation } from 'src/app/models/Reservation';
import { ReservationActions } from 'src/app/store/reservation/reservation.actions';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.css'],
})
export class ReservationsComponent implements OnInit {
  displayedColumns: string[] = ['amount', 'tour.title', 'actions'];
  reservations: IReservation[] = [];

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.store.dispatch(ReservationActions.getAllReservations());
    this.store.select('reservation').subscribe(({ reservations }) => {
      this.reservations = reservations;
    });
  }

  cancelReservation(tourId: number) {
    this.store.dispatch(ReservationActions.deleteReservation({ id: tourId }));
    this.store.dispatch(ReservationActions.getAllReservations());
  }
}
