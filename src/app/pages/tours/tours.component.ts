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
  tours: ITour[] = [];
  searchText: string = '';

  constructor(private store: Store<AppState>) {
    this.store
      .select((state) => state.tour)
      .subscribe((tourState) => {
        this.tours = tourState.tours;
      });
  }

  ngOnInit() {
    this.store.dispatch(TourActions.getAllTours());
  }

  get filteredTours() {
    return this.searchText
      ? this.tours.filter((tour) =>
          tour.title.toLowerCase().includes(this.searchText.toLowerCase())
        )
      : this.tours;
  }

  onSearchQueryChange(searchText: string) {
    this.searchText = searchText;
  }
}
