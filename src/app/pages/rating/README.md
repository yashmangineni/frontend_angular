# Rating Component

## Overview
The Rating component allows users to rate the application and view the overall rating from all users. It provides a 5-star rating system with optional comments.

## Features
1. **5-Star Rating System**: Users can rate the app from 1 to 5 stars
2. **Comment Submission**: Optional text feedback
3. **Overall Rating Display**: Shows the average rating and total number of ratings
4. **Recent Ratings**: Displays the 5 most recent ratings
5. **Local Storage**: Ratings are stored in the browser's local storage
6. **Responsive Design**: Works on all device sizes

## Implementation Details

### Component Structure
- **rating.ts**: Main component logic
- **rating.html**: Template with rating form and display
- **rating.css**: Styling for the rating interface

### Key Methods
- `setRating(rating: number)`: Sets the current rating
- `submitRating()`: Submits the rating and comment
- `loadRatings()`: Loads existing ratings from local storage
- `saveRatings()`: Saves ratings to local storage
- `calculateAverageRating()`: Calculates the overall average rating
- `resetRating()`: Allows user to rate again

### Data Storage
Ratings are currently stored in the browser's local storage with the key `appRatings`. In a production environment, this would be replaced with backend storage.

### Template Helpers
- `getArray(length: number)`: Helper to create arrays for *ngFor loops
- `Math`: Reference to JavaScript Math object for calculations

## Usage
1. Navigate to the "Rate Us" link in the sidebar
2. Click on the stars to select a rating (1-5)
3. Optionally add a comment
4. Click "Submit Rating"
5. View the overall rating and recent feedback
6. Use "Rate Again" to submit another rating

## Styling
The component uses a modern, clean design with:
- Gradient backgrounds for visual appeal
- Responsive layout for all screen sizes
- Interactive star ratings with hover effects
- Clear feedback for user actions