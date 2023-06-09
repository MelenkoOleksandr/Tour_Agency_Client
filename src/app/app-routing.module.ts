import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { ToursComponent } from './pages/tours/tours.component';
import { TourComponent } from './pages/tour/tour.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { CreateTourComponent } from './pages/create-tour/create-tour.component';
import { AgentToursComponent } from './pages/agent-tours/agent-tours.component';
import { EditTourComponent } from './pages/edit-tour/edit-tour.component';
import { ReservationsComponent } from './pages/reservations/reservations.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: ToursComponent,
  },
  { path: 'reservations', component: ReservationsComponent},
  { path: 'agent-tours', component: AgentToursComponent },
  { path: 'tours/edit/:id', component: EditTourComponent },
  { path: 'tours/create', component: CreateTourComponent },
  { path: 'tour/:id', component: TourComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
