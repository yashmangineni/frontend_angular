import { Injectable, signal } from '@angular/core';
import { Observable } from 'rxjs';
import { BackendService, User } from './backend.service';

interface CurrentUser {
  id?: number;
  name?: string;
  email: string | null;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  currentUserEmail = signal<string | null>(null);
  private authToken: string | null = null;

  constructor(private backendService: BackendService) {
    const email = this.safeGet('auth_current_email');
    const token = this.safeGet('auth_token');
    if (email) this.currentUserEmail.set(email);
    if (token) this.authToken = token;
  }

  signup(name: string, email: string, password: string): Observable<{ ok: boolean; message?: string }> {
    console.log('AuthService: Attempting signup with:', { name, email, password });
    
    const user: User = { name, email, password };
    
    return new Observable(observer => {
      this.backendService.signup(user).subscribe({
        next: (response: any) => {
          if (response.success) {
            observer.next({ ok: true, message: 'Account created successfully' });
          } else {
            observer.next({ ok: false, message: response.message || 'Failed to create account' });
          }
          observer.complete();
        },
        error: (error) => {
          console.error('AuthService: Error during signup:', error);
          // Check if it's a network error (backend not reachable)
          if (error.status === 0 || error.status === null) {
            observer.next({ ok: false, message: 'Unable to connect to the backend server. Please ensure the backend is running.' });
          } else {
            observer.next({ ok: false, message: error.error?.message || 'Failed to create account. Please try again.' });
          }
          observer.complete();
        }
      });
    });
  }

  login(email: string, password: string): Observable<{ ok: boolean; message?: string }> {
    console.log('AuthService: Attempting login with:', { email });
    
    return new Observable(observer => {
      this.backendService.login(email, password).subscribe({
        next: (response: any) => {
          if (response.success) {
            // Store user session (using email as identifier since backend doesn't return a token)
            this.safeSet('auth_current_email', email);
            this.currentUserEmail.set(email);
            observer.next({ ok: true });
          } else {
            observer.next({ ok: false, message: response.message || 'Invalid email or password' });
          }
          observer.complete();
        },
        error: (error) => {
          console.error('AuthService: Error during login:', error);
          // Check if it's a network error (backend not reachable)
          if (error.status === 0 || error.status === null) {
            observer.next({ ok: false, message: 'Unable to connect to the backend server. Please ensure the backend is running.' });
          } else {
            observer.next({ ok: false, message: error.error?.message || 'Login failed. Please check your credentials.' });
          }
          observer.complete();
        }
      });
    });
  }

  logout(): void {
    this.authToken = null;
    this.safeRemove('auth_current_email');
    this.safeRemove('auth_token');
    this.currentUserEmail.set(null);
  }

  isLoggedIn(): boolean {
    return this.currentUserEmail() !== null;
  }

  getCurrentUser(): CurrentUser | null {
    if (!this.isLoggedIn()) return null;
    const email = this.currentUserEmail();
    
    if (email) {
      return { email };
    }
    
    return null;
  }

  getAuthToken(): string | null {
    return this.authToken;
  }

  private safeGet(key: string): string | null {
    try {
      return localStorage.getItem(key);
    } catch {
      return null;
    }
  }
  
  private safeSet(key: string, val: string): void {
    try {
      localStorage.setItem(key, val);
    } catch {}
  }
  
  private safeRemove(key: string): void {
    try {
      localStorage.removeItem(key);
    } catch {}
  }
}