import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpErrorResponse,
} from '@angular/common/http';
import { catchError, switchMap } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { AuthService } from './services/auth.service';
import { AppState } from './store/root.reducer';
import { Store } from '@ngrx/store';
import { logout } from './store/auth/auth.actions';

@Injectable({ providedIn: 'root' })
export class TokenInterceptor implements HttpInterceptor {
  constructor(
    private authService: AuthService,
    private store: Store<AppState>
  ) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<any> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401) {
          console.log('Token expired', request);
          this.authService.refreshToken()
          return this.authService.refreshToken().pipe(
            switchMap(() => {
              console.log('Token refreshed');

              const authReqWithCookie = request.clone({
                withCredentials: true,
              });
              return next.handle(authReqWithCookie);
            }),
            catchError((refreshError) => {
              console.log('Token refresh failed', refreshError);
              // If refresh token is expired, logout
              // this.store.dispatch(logout());
              return throwError(refreshError);
            })
          );
        } else {
          console.log('Error', error);

          return throwError(error);
        }
      })
    );
  }
}
