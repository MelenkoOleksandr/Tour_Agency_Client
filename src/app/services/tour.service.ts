import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ITour } from '../models/Tour';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TourService {
  constructor(private http: HttpClient) {}

  getTours(): Observable<ITour[]> {
    return this.http.get('http://localhost:8080/api/tours', {
      withCredentials: true,
    }) as Observable<ITour[]>;
  }

  getTour(id: number) {
    return this.http.get(`http://localhost:8080/api/tours/${id}`, {
      withCredentials: true,
    }) as Observable<ITour>;
  }

  createTour(tour: ITour) {
    return this.http.post('http://localhost:8080/api/tours', tour, {
      withCredentials: true,
    }) as Observable<ITour>;
  }

  updateTour(tour: ITour) {
    return this.http.put(`http://localhost:8080/api/tours/${tour.id}`, tour, {
      withCredentials: true,
    }) as Observable<ITour>;
  }

  deleteTour(id: number) {
    return this.http.delete(`http://localhost:8080/api/tours/${id}`, {
      withCredentials: true,
    });
  }
}
