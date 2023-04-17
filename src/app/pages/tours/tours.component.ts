import { Component } from '@angular/core';
import { ITour } from 'src/app/models/Tour';

@Component({
  selector: 'app-tours',
  templateUrl: './tours.component.html',
  styleUrls: ['./tours.component.css'],
})
export class ToursComponent {
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
}
