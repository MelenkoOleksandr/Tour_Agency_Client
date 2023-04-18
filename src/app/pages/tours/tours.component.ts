import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ITour } from 'src/app/models/Tour';
import { AppState } from 'src/app/store/root.reducer';
import { TourActions } from 'src/app/store/tour/tour.actions';

@Component({
  selector: 'app-tours',
  templateUrl: './tours.component.html',
  styleUrls: ['./tours.component.css'],
})
export class ToursComponent implements OnInit {
  tours: ITour[] = [
    {
      id: 1,
      travelAgentId: 1,
      type: 'VACATION',
      title: 'Tour 1',
      description: 'Description 1',
      departurePlace: 'Departure Place 1',
      country: 'Country 1',
      image:
        'https://www.spain.info/export/sites/segtur/.content/imagenes/cabecera-completa/peniscola-castellon-s712575202.jpg',
      price: 1,
      availablePlaces: 1,
      startDate: new Date('2021-01-01'),
      endDate: new Date('2021-01-01'),
      isHot: true,
      hotDiscount: 1,
    },
  ];

  constructor(private store: Store<AppState>) {
    this.store
      .select((state) => state.tour)
      .subscribe((tourState) => {
        this.tours = tourState.tours;
      });
  }

  ngOnInit() {
    console.log('ToursComponent.ngOnInit');
    this.store.dispatch(TourActions.getAllTours());
  }
}
