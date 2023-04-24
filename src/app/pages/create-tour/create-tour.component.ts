import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TourService } from 'src/app/services/tour.service';
import { formatDate } from 'src/app/utils/date';

@Component({
  selector: 'app-create-tour',
  templateUrl: './create-tour.component.html',
  styleUrls: ['./create-tour.component.css'],
})
export class CreateTourComponent {
  formGroup: FormGroup = this.fb.group({
    type: [null, Validators.required],
    title: [null, Validators.required],
    description: [null, Validators.required],
    image: [null, Validators.required],
    price: [null, Validators.required],
    availablePlaces: [null, Validators.required],
    startDate: [null, Validators.required],
    endDate: [null, Validators.required],
    isHot: [false],
    hotDiscount: [0],
    departurePlace: [null, Validators.required],
    country: [null, Validators.required],
  });

  constructor(private fb: FormBuilder, private tourService: TourService) {}

  onSubmit() {
    const tourData = {
      ...this.formGroup.value,
      startDate: formatDate(this.formGroup.value.startDate),
      endDate: formatDate(this.formGroup.value.endDate),
    };

    this.tourService.createTour(tourData).subscribe((res) => {
      console.log(res);
    });
  }
}
