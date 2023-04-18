import { Component } from '@angular/core';
import { IUser } from 'src/app/models/User';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/root.reducer';
import { logout } from 'src/app/store/auth/auth.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  user: IUser | null = null;

  constructor(private store: Store<AppState>) {
    this.store
      .select((state) => state)
      .subscribe((authState) => {
        this.user = authState?.auth?.user;
      });
  }

  logout() {
    this.store.dispatch(logout());
  }
}
