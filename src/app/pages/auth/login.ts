import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule, NavigationEnd } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginPage implements OnInit {
  email = '';
  password = '';
  error = '';
  success = '';
  loading = false;

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit(): void {
    // Check if user is redirected from signup
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      if (event.url === '/login' && history.state?.from === 'signup') {
        this.success = 'Account created successfully! A welcome email has been sent to your email address. Please login with your credentials.';
      }
    });
  }

  submit(): void {
    console.log('LoginPage: Submit clicked with:', { email: this.email, password: this.password });
    this.error = '';
    this.success = '';
    this.loading = true;
    
    // Basic validation
    if (!this.email.trim()) {
      this.error = 'Email is required';
      this.loading = false;
      console.log('LoginPage: Validation failed - email required');
      return;
    }
    
    if (!this.password) {
      this.error = 'Password is required';
      this.loading = false;
      console.log('LoginPage: Validation failed - password required');
      return;
    }
    
    console.log('LoginPage: Calling AuthService.login');
    this.auth.login(this.email.trim(), this.password).subscribe({
      next: (res) => {
        this.loading = false;
        console.log('LoginPage: Received response from AuthService:', res);
        if (!res.ok) {
          this.error = res.message || 'Login failed';
          console.log('LoginPage: Login failed with message:', this.error);
          return;
        }
        // Redirect to the main interview page after successful login
        console.log('LoginPage: Login successful, redirecting to /interview');
        this.router.navigate(['/interview']);
      },
      error: (err) => {
        this.loading = false;
        console.log('LoginPage: Error in subscribe:', err);
        // Handle the error case properly
        if (err && err.error && err.error.message) {
          this.error = err.error.message;
        } else {
          this.error = 'Login failed. Please try again.';
        }
        console.error('LoginPage: Login error:', err);
      }
    });
  }
}