import { Injectable } from '@angular/core';
import { ofType, createEffect, Actions } from '@ngrx/effects';
import { mergeMap, map, catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import {
  login,
  loginFailure,
  loginSuccess,
  logout,
  logoutFailure,
  logoutSuccess,
  register,
  registerFailure,
  registerSuccess,
} from './auth.actions';
import { Router } from '@angular/router';
import { AuthResponse } from 'src/app/models/User';

@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router
  ) {}

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(login),
      mergeMap((action) =>
        this.authService
          .login({ email: action.email, password: action.password })
          .pipe(
            map((response: AuthResponse) => loginSuccess(response)),
            catchError((error) => of(loginFailure({ error })))
          )
      )
    )
  );

  register$ = createEffect(() =>
    this.actions$.pipe(
      ofType(register),
      mergeMap((action) =>
        this.authService
          .register({
            email: action.email,
            password: action.password,
            name: action.name,
            userType: action.userType,
          })
          .pipe(
            map((response: AuthResponse) => registerSuccess(response)),
            catchError((error) => of(registerFailure({ error })))
          )
      )
    )
  );

  authSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(loginSuccess, registerSuccess),
        tap(() => this.router.navigate(['/']))
      ),
    { dispatch: false }
  );

  logout$ = createEffect(() =>
    this.actions$.pipe(
      ofType(logout),
      mergeMap(() =>
        of(this.authService.logout()).pipe(
          map(() => logoutSuccess()),
          catchError((error) => of(logoutFailure()))
        )
      ),
      tap(() => this.router.navigate(['/login']))
    )
  );
}
