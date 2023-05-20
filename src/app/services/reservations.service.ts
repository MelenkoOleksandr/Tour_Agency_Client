import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IReservation } from '../models/Reservation';

@Injectable({
  providedIn: 'root',
})
export class ReservationsService {
  constructor(private http: HttpClient) {}

  getReservations(): Observable<IReservation[]> {
    return this.http.get(
      'http://localhost:8080/api/reservations'
    ) as Observable<IReservation[]>;
  }

  reserveTour(tourId: number, amount: number) {
    return this.http.post(
      `http://localhost:8080/api/reservations/${tourId}`,
      { amount },
      { withCredentials: true }
    );
  }

  cancelReservation(reservationId: number) {
    return this.http.delete(
      `http://localhost:8080/api/reservations/${reservationId}`,
      { withCredentials: true }
    );
  }
}
