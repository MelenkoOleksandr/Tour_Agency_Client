import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthResponse, IUserCredentials } from '../models/User';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(userCredentials: IUserCredentials) {
    return this.http.post(
      'http://localhost:8080/api/auth/login',
      userCredentials
    ) as Observable<AuthResponse>;
  }

  register(userCredentials: IUserCredentials) {
    return this.http.post(
      'http://localhost:8080/api/auth/register',
      userCredentials
    ) as Observable<AuthResponse>;
  }
}
