import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-tour',
  templateUrl: './create-tour.component.html',
  styleUrls: ['./create-tour.component.css'],
})
export class CreateTourComponent {
  formGroup: FormGroup = this.fb.group({
      // travelAgentId: [null, Validators.required],
      type: [null, Validators.required],
      title: [null, Validators.required],
      description: [null, Validators.required],
      image: [null, Validators.required],
      price: [null, Validators.required],
      availablePlaces: [null, Validators.required],
      startDate: [null, Validators.required],
      endDate: [null, Validators.required],
      isHot: [false],
      hotDiscount: [null],
      departurePlace: [null, Validators.required],
      country: [null, Validators.required],
    });

  constructor(private fb: FormBuilder) {}

}
