import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadUser } from './store/auth/auth.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'travel-agency';
  constructor(private store: Store) {}

  ngOnInit() {
    this.store.dispatch(loadUser());
  }
}
