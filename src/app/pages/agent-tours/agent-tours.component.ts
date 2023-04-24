import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { ITour } from 'src/app/models/Tour';
import { AppState } from 'src/app/store/root.reducer';
import { TourActions } from 'src/app/store/tour/tour.actions';
import { withLatestFrom } from 'rxjs/operators';

@Component({
  selector: 'app-agent-tours',
  templateUrl: './agent-tours.component.html',
  styleUrls: ['./agent-tours.component.css'],
})
export class AgentToursComponent {
  displayedColumns: string[] = [
    'id',
    'type',
    'title',
    'price',
    'availablePlaces',
    'startDate',
    'endDate',
    'isHot',
    'hotDiscount',
    'actions',
  ];
  tours: ITour[] = [];

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.store.dispatch(TourActions.getAllTours());
    // Get all tours from the store and filter them by the current user's id
    this.store
      .select('tour')
      .pipe(withLatestFrom(this.store.select('auth')))
      .subscribe(([{ tours }, user]) => {
        this.tours = tours.filter(
          (tour) => tour.travelAgentId === user.user?.id
        );
      });
  }

  deleteTour(id: number) {
    this.tours = this.tours.filter((tour) => tour.id !== id);
  }
}
