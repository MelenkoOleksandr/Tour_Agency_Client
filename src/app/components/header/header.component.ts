import { Component, Inject } from '@angular/core';
import { IUser } from 'src/app/models/User';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/root.reducer';
import { logout } from 'src/app/store/auth/auth.actions';
import { AuthService } from '@auth0/auth0-angular';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  user: IUser | null = null;

  constructor(
    private store: Store<AppState>,
    @Inject(DOCUMENT) public document: Document,
    public auth: AuthService
  ) {
    this.store
      .select((state) => state)
      .subscribe((authState) => {
        this.user = authState?.auth?.user;
      });
  }

  logout() {
    this.store.dispatch(logout());
  }

  get isAdmin(): boolean {
    return this.user?.userType === 'ADMIN';
  }

  get isTravelAgent(): boolean {
    return this.user?.userType === 'TRAVEL_AGENT';
  }
}
