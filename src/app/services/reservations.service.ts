import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ReservationsService {
  constructor(private http: HttpClient) {}

  getReservations() {
    return this.http.get('http://localhost:8080/api/reservations');
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
