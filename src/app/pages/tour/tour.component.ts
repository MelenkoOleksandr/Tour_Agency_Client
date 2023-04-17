import { Component } from '@angular/core';
import * as dayjs from 'dayjs';
import { ITour } from 'src/app/models/Tour';

@Component({
  selector: 'app-tour',
  templateUrl: './tour.component.html',
  styleUrls: ['./tour.component.css'],
})
export class TourComponent {
  tour: ITour = {
    id: 1,
    travelAgentId: 1,
    type: 'VACATION',
    title: 'Tour 1',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam nisl,Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam nisl,Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam nisl,',
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
  };

  similarTours: ITour[] = [
    {
      id: 2,
      travelAgentId: 1,
      type: 'VACATION',
      title: 'Tour 2',
      description: 'Description 2',
      departurePlace: 'Departure Place 2',
      country: 'Country 2',
      image:
        'https://www.spain.info/export/sites/segtur/.content/imagenes/cabecera-completa/peniscola-castellon-s712575202.jpg',
      price: 2,
      availablePlaces: 2,
      startDate: new Date('2021-01-01'),
      endDate: new Date('2021-01-01'),
      isHot: true,
      hotDiscount: 2,
    },
    {
      id: 2,
      travelAgentId: 1,
      type: 'VACATION',
      title: 'Tour 2',
      description: 'Description 2',
      departurePlace: 'Departure Place 2',
      country: 'Country 2',
      image:
        'https://www.spain.info/export/sites/segtur/.content/imagenes/cabecera-completa/peniscola-castellon-s712575202.jpg',
      price: 2,
      availablePlaces: 2,
      startDate: new Date('2021-01-01'),
      endDate: new Date('2021-01-01'),
      isHot: true,
      hotDiscount: 2,
    },
    {
      id: 2,
      travelAgentId: 1,
      type: 'VACATION',
      title: 'Tour 2',
      description: 'Description 2',
      departurePlace: 'Departure Place 2',
      country: 'Country 2',
      image:
        'https://www.spain.info/export/sites/segtur/.content/imagenes/cabecera-completa/peniscola-castellon-s712575202.jpg',
      price: 2,
      availablePlaces: 2,
      startDate: new Date('2021-01-01'),
      endDate: new Date('2021-01-01'),
      isHot: true,
      hotDiscount: 2,
    },
  ];

  handleBuyTour() {
    console.log('Tour bought');
  }

  get days() {
    return `From ${dayjs(this.tour.startDate).format('DD/MM/YYYY')} to ${dayjs(
      this.tour.endDate
    ).format('DD/MM/YYYY')}`;
  }
}
