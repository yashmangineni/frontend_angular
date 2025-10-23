import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-rating',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './rating.html',
  styleUrls: ['./rating.css']
})
export class Rating implements OnInit {
  rating: number = 0;
  comment: string = '';
  ratings: any[] = [];
  averageRating: number = 0;
  totalRatings: number = 0;
  hasRated: boolean = false;
  loading: boolean = false;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadRatings();
  }

  setRating(rating: number): void {
    this.rating = rating;
  }

  submitRating(): void {
    if (this.rating === 0) {
      alert('Please select a rating');
      return;
    }

    this.loading = true;
    
    const ratingData = {
      score: this.rating,
      comment: this.comment
    };

    // Send rating to backend
    this.http.post('http://localhost:5050/api/ratings', ratingData).subscribe({
      next: (response: any) => {
        this.loading = false;
        if (response.success) {
          // Reload ratings to show the new one
          this.loadRatings();
          this.hasRated = true;
          
          // Reset form
          this.rating = 0;
          this.comment = '';
        } else {
          alert('Failed to submit rating: ' + response.message);
        }
      },
      error: (error) => {
        this.loading = false;
        console.error('Error submitting rating:', error);
        alert('Failed to submit rating. Please try again.');
      }
    });
  }

  loadRatings(): void {
    this.loading = true;
    
    // Load ratings from backend
    this.http.get('http://localhost:5050/api/ratings').subscribe({
      next: (response: any) => {
        this.loading = false;
        if (response.success) {
          this.ratings = response.data;
          this.averageRating = response.averageRating;
          this.totalRatings = response.totalRatings;
        } else {
          console.error('Failed to load ratings');
        }
      },
      error: (error) => {
        this.loading = false;
        console.error('Error loading ratings:', error);
        // Fallback to localStorage if backend is not available
        this.loadRatingsFromLocalStorage();
      }
    });
  }

  loadRatingsFromLocalStorage(): void {
    // Fallback to localStorage if backend is not available
    const savedRatings = localStorage.getItem('appRatings');
    if (savedRatings) {
      this.ratings = JSON.parse(savedRatings);
      this.calculateAverageRating();
    }
  }

  calculateAverageRating(): void {
    if (this.ratings.length === 0) {
      this.averageRating = 0;
      this.totalRatings = 0;
      return;
    }

    const sum = this.ratings.reduce((acc, rating) => acc + rating.rating, 0);
    this.averageRating = parseFloat((sum / this.ratings.length).toFixed(1));
    this.totalRatings = this.ratings.length;
  }

  resetRating(): void {
    this.hasRated = false;
  }
  
  // Helper method for template
  getArray(length: number): any[] {
    return Array(length);
  }
  
  // Helper method for Math operations in template
  Math: any = Math;
  
  // Get count of ratings for a specific star value
  getRatingCount(stars: number): number {
    return this.ratings.filter(rating => rating.score === stars).length;
  }
  
  // Get percentage of ratings for a specific star value
  getRatingPercentage(stars: number): number {
    if (this.ratings.length === 0) return 0;
    const count = this.getRatingCount(stars);
    return (count / this.ratings.length) * 100;
  }
}