import * as dayjs from 'dayjs';
import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { ITour } from 'src/app/models/Tour';
import { AppState } from 'src/app/store/root.reducer';
import { TourActions } from 'src/app/store/tour/tour.actions';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogRef,
} from '@angular/material/dialog';
import { ReservationsService } from './../../services/reservations.service';

@Component({
  selector: 'app-tour',
  templateUrl: './tour.component.html',
  styleUrls: ['./tour.component.css'],
})
export class TourComponent implements OnInit {
  currentTourId!: number;
  tour!: ITour | null;
  similarTours!: ITour[];

  constructor(
    private store: Store<AppState>,
    private route: ActivatedRoute,
    public dialog: MatDialog
  ) {
    this.store.dispatch(TourActions.getAllTours());
    this.route.params.subscribe(({ id }) => {
      this.currentTourId = id;
      this.store.dispatch(TourActions.getTour({ id }));
    });
  }

  ngOnInit(): void {
    this.store.select('tour').subscribe((tour) => {
      this.tour = tour.tour;
      this.similarTours = tour.tours;
    });
  }

  openBookModal() {
    this.dialog.open(BookTourDialogComponent, {
      data: {
        tourId: this.currentTourId,
      },
    });
  }

  get days() {
    if (!this.tour) return '';

    return `From ${dayjs(this.tour.startDate).format('DD/MM/YYYY')} to ${dayjs(
      this.tour.endDate
    ).format('DD/MM/YYYY')}`;
  }
}

@Component({
  selector: 'book-tour-dialog',
  template: `
    <h1 mat-dialog-title>Book tour</h1>
    <div mat-dialog-content>
      <p>Are you sure you want to book this tour?</p>
    </div>
    <div mat-dialog-actions>
      <button mat-button mat-dialog-close>Cancel</button>
      <button mat-button (click)="bookTour()">Book</button>
    </div>
  `,
})
export class BookTourDialogComponent {
  amount = 1;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { tourId: number },
    private reservationsService: ReservationsService,
    private dialogRef: MatDialogRef<BookTourDialogComponent>
  ) {}

  bookTour() {
    this.reservationsService
      .reserveTour(this.data.tourId, this.amount)
      .subscribe((res) => {
        console.log(res);
      });
    this.dialogRef.close();
  }
}
