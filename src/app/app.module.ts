import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ToursComponent } from './pages/tours/tours.component';
import {
  BookTourDialogComponent,
  TourComponent,
} from './pages/tour/tour.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { HeaderComponent } from './components/header/header.component';
import { SearchComponent } from './components/search/search.component';
import { TourCardComponent } from './components/tour-card/tour-card.component';

import { AuthModule } from '@auth0/auth0-angular';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatNativeDateModule } from '@angular/material/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

import { rootReducer } from './store/root.reducer';
import { AuthEffects } from './store/auth/auth.effects';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { initialState } from './store/root.reducer';
import { TourEffects } from './store/tour/tour.effects';
import { CreateTourComponent } from './pages/create-tour/create-tour.component';
import { TokenInterceptor } from './token.inteceptor';
import { AgentToursComponent } from './pages/agent-tours/agent-tours.component';
import { EditTourComponent } from './pages/edit-tour/edit-tour.component';
import { ReservationsComponent } from './pages/reservations/reservations.component';
import { ReservationEffects } from './store/reservation/reservation.effects';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ToursComponent,
    TourComponent,
    NotFoundComponent,
    ProfileComponent,
    HeaderComponent,
    SearchComponent,
    TourCardComponent,
    CreateTourComponent,
    AgentToursComponent,
    EditTourComponent,
    BookTourDialogComponent,
    ReservationsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NoopAnimationsModule,
    BrowserAnimationsModule,

    MatIconModule,
    MatButtonModule,
    MatAutocompleteModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatSelectModule,
    MatCheckboxModule,
    MatNativeDateModule,
    MatMenuModule,
    MatTableModule,
    MatDialogModule,

    AuthModule.forRoot({
      domain: 'dev-20ngumnk3sv4cfcn.us.auth0.com',
      clientId: 'Nc9525OFhxUj4wgfFjizVPhH8FTP32mx',
      authorizationParams: {
        redirect_uri: window.location.origin,
      },
    }),
    StoreModule.forRoot(rootReducer, { initialState: initialState }),
    EffectsModule.forRoot(AuthEffects, TourEffects, ReservationEffects),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
    }),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
