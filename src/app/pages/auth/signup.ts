import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './signup.html',
  styleUrls: ['./signup.css']
})
export class SignupPage {
  name = '';
  email = '';
  password = '';
  error = '';
  success = '';
  loading = false;

  constructor(private auth: AuthService, private router: Router) {}

  submit(): void {
    console.log('SignupPage: Submit clicked with:', { name: this.name, email: this.email, password: this.password });
    this.error = '';
    this.success = '';
    this.loading = true;
    
    // Basic client-side validation
    if (!this.name.trim()) {
      this.error = 'Name is required';
      this.loading = false;
      console.log('SignupPage: Validation failed - name required');
      return;
    }
    
    if (!this.email.trim()) {
      this.error = 'Email is required';
      this.loading = false;
      console.log('SignupPage: Validation failed - email required');
      return;
    }
    
    if (!this.password) {
      this.error = 'Password is required';
      this.loading = false;
      console.log('SignupPage: Validation failed - password required');
      return;
    }
    
    // Password constraints validation
    const passwordValidation = this.validatePassword(this.password);
    if (!passwordValidation.isValid) {
      this.error = passwordValidation.message;
      this.loading = false;
      console.log('SignupPage: Password validation failed -', this.error);
      return;
    }
    
    console.log('SignupPage: Calling AuthService.signup');
    this.auth.signup(this.name.trim(), this.email.trim(), this.password).subscribe({
      next: (res) => {
        this.loading = false;
        console.log('SignupPage: Received response from AuthService:', res);
        if (!res.ok) {
          this.error = res.message || 'Signup failed';
          console.log('SignupPage: Signup failed with message:', this.error);
          return;
        }
        
        // Show success message
        this.success = res.message || 'Account created successfully! A welcome email has been sent to your email address.';
        console.log('SignupPage: Signup successful:', this.success);
        
        // Redirect to login page after successful signup
        setTimeout(() => {
          console.log('SignupPage: Redirecting to /login');
          this.router.navigate(['/login'], { state: { from: 'signup' } });
        }, 2000);
      },
      error: (err) => {
        this.loading = false;
        console.log('SignupPage: Error in subscribe:', err);
        // Handle the error case properly
        if (err && err.error && err.error.message) {
          this.error = err.error.message;
        } else {
          this.error = 'Signup failed. Please try again.';
        }
        console.error('SignupPage: Signup error:', err);
      }
    });
  }
  
  private validatePassword(password: string): { isValid: boolean; message: string } {
    // Check minimum length
    if (password.length < 8) {
      return { isValid: false, message: 'Password must be at least 8 characters long' };
    }
    
    // Check for uppercase letter
    if (!/[A-Z]/.test(password)) {
      return { isValid: false, message: 'Password must contain at least one uppercase letter' };
    }
    
    // Check for lowercase letter
    if (!/[a-z]/.test(password)) {
      return { isValid: false, message: 'Password must contain at least one lowercase letter' };
    }
    
    // Check for digit
    if (!/\d/.test(password)) {
      return { isValid: false, message: 'Password must contain at least one digit' };
    }
    
    // Check for special character
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      return { isValid: false, message: 'Password must contain at least one special character' };
    }
    
    return { isValid: true, message: '' };
  }
}