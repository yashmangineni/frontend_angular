# Skip Functionality Improvements

## Overview
This document describes the enhancements made to the coding test component's skip functionality to better support users who want to skip tests and navigate between skipped problems.

## Features Implemented

### 1. Enhanced Skip Tracking
- Added `skippedProblems` array to track which problems have been skipped
- Each skipped problem is stored with its index for easy navigation
- Code written for skipped problems is preserved

### 2. Skip Navigation
- **Next Skipped Problem**: Navigate to the next problem in the skipped list
- **Previous Skipped Problem**: Navigate to the previous problem in the skipped list
- **Wrap-around Navigation**: When reaching the end of the skipped list, navigation wraps to the beginning

### 3. Visual Indicators
- Added "SKIPPED" badge to problems that were previously skipped
- Display count of total skipped problems
- Clear navigation buttons for moving between skipped problems

### 4. Code Preservation
- When skipping a problem, the user's code is saved
- When returning to a skipped problem, the previously written code is restored
- Starter code is used only for problems that haven't been attempted

## How to Use

### Skipping a Problem
1. Click the "Skip & Save Code" button to skip the current problem
2. Your code will be saved automatically
3. The problem will be added to the skipped problems list

### Navigating Between Skipped Problems
1. Use the "Previous Skipped" button to go to the previous skipped problem
2. Use the "Next Skipped" button to go to the next skipped problem
3. Navigation automatically wraps around when reaching the end of the list

### Submitting All Code
1. Click the "Submit All Code" button to submit all attempted and skipped problems
2. Get an overall score for all problems

## Technical Implementation

### New Methods Added
- `skipAndSaveCode()`: Skip current problem while preserving code
- `goToNextSkippedProblem()`: Navigate to next skipped problem
- `goToPreviousSkippedProblem()`: Navigate to previous skipped problem
- `isCurrentProblemSkipped()`: Check if current problem was skipped
- `getSkippedProblemsCount()`: Get count of skipped problems
- `resetSkippedProblems()`: Reset skipped problems tracking

### Data Structures
- `skippedProblems: number[]`: Array of indices for skipped problems

### UI Components
- Navigation section with previous/next buttons
- Skipped problem indicator badge
- Skipped problems counter

## Benefits
1. **Improved User Experience**: Users can easily navigate between problems they want to revisit
2. **Code Preservation**: No code is lost when skipping problems
3. **Better Organization**: Clear indication of which problems have been skipped
4. **Efficient Workflow**: Quick navigation between challenging problems