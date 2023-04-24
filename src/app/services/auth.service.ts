import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  AuthResponse,
  IUserCredentials,
  IUserRegisterCredentials,
} from '../models/User';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(userCredentials: IUserCredentials) {
    return this.http.post(
      'http://localhost:8080/api/auth/login',
      userCredentials,
      {
        withCredentials: true,
      }
    ) as Observable<AuthResponse>;
  }

  register(userCredentials: IUserRegisterCredentials) {
    return this.http.post(
      'http://localhost:8080/api/auth/register',
      userCredentials,
      {
        withCredentials: true,
      }
    ) as Observable<AuthResponse>;
  }

  refreshToken() {
    const refreshToken = localStorage.getItem('refreshToken') as string;
    if (!refreshToken) {
      throw new Error('No refresh token');
    }

    return this.http.post(
      'http://localhost:8080/api/refreshToken',
      { refreshToken },
      { withCredentials: true }
    ) as Observable<string>;
  }

  logout() {
    // Check why cookies are not being deleted
    // Clear access token cookie
    document.cookie =  'accessToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    return this.http.delete('http://localhost:8080/api/auth/refreshToken', {
      withCredentials: true,
    }) as Observable<unknown>;
  }
}
