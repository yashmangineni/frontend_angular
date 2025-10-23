import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';

export interface User {
  id?: number;
  name: string;
  email: string;
  password?: string;
}

export interface LoginResponse {
  token: string;
  user: User;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
}

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  private apiUrl = environment.apiUrl;
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  // User signup
  signup(user: User): Observable<any> {
    return this.http.post(`${this.apiUrl}/auth/signup`, user, this.httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  // User login
  login(email: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/auth/login`, { email, password }, this.httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  // Get all users
  getUsers(): Observable<any> {
    return this.http.get(`${this.apiUrl}/auth/users`, this.httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  // Error handling
  private handleError(error: any) {
    console.error('An error occurred:', error);
    return throwError(() => error);
  }
}