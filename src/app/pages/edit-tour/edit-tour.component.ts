import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { ITour } from 'src/app/models/Tour';
import { TourService } from 'src/app/services/tour.service';
import { AppState } from 'src/app/store/root.reducer';
import { TourActions } from 'src/app/store/tour/tour.actions';
import { formatDate } from 'src/app/utils/date';

@Component({
  selector: 'app-edit-tour',
  templateUrl: './edit-tour.component.html',
  styleUrls: ['./edit-tour.component.css'],
})
export class EditTourComponent implements OnInit {
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
  id!: number;

  constructor(
    private fb: FormBuilder,
    private store: Store<AppState>,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(({ id }) => {
      this.id = id;
      this.store.dispatch(TourActions.getTour({ id }));
    });

    this.store.select('tour').subscribe(({ tour }) => {
      if (!tour) return;
      this.formGroup.patchValue(tour);
    });
  }

  onSubmit() {
    const tourData: ITour = {
      id: this.id,
      ...this.formGroup.value,
      startDate: formatDate(this.formGroup.value.startDate),
      endDate: formatDate(this.formGroup.value.endDate),
    };

    console.log(tourData);
    this.store.dispatch(TourActions.updateTour({ tour: tourData }));
  }
}
