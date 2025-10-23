# Freshers Job Application

This is a mobile application built with Angular and Capacitor for Android, designed to help freshers prepare for job interviews.

## Features
- User authentication (signup/login)
- AI interview practice
- Coding tests
- Resume templates
- Interview preparation materials
- Skill assessments

## Technology Stack
- Frontend: Angular 20.3 with TypeScript
- Mobile Integration: Capacitor 7.4.3 for Android
- Backend: .NET with MySQL database
- Testing: Karma for unit tests, Jasmine for test framework
- Package Manager: npm
- Code Formatting: Prettier configured for HTML and JavaScript

## Backend Configuration

The application connects to a .NET backend with MySQL database. The API endpoint is configured in environment.ts:

```typescript
export const environment = {
  production: false,
  apiUrl: 'http://localhost:5050/api'
};
```

## Installation
1. Clone the repository
2. Run `npm install` to install dependencies
3. Ensure the .NET backend is running on http://localhost:5050
4. Run `npx ng serve` to start the development server
5. For Android development, use `npm run build-android` and `npm run open-android`

## Database Setup
1. Install MySQL Server and MySQL Workbench
2. Run the database-setup.sql script to create the database and tables
3. Configure the connection string in the .NET backend's appsettings.json file

## Building for Android
1. Run `npm run build-android` to build the web assets and prepare for Android
2. Run `npm run open-android` to open the Android project in Android Studio

## Android App Links
The Android app supports deep linking through Android App Links, allowing users to open specific sections of the app directly from web URLs.

### Supported Links
- `https://freshers.example.com` - Opens the main app
- `https://freshers.example.com/interview` - Opens the interview section
- `https://freshers.example.com/login` - Opens the login page
- `https://freshers.example.com/signup` - Opens the signup page
- `https://freshers.example.com/profile` - Opens user profile
- `https://freshers.example.com/rate` - Opens rating page
- `https://freshers.example.com/share` - Opens share page

### Setup Instructions
1. Build the Android app: `npm run build-android`
2. Open in Android Studio: `npm run open-android`
3. Generate a signed APK or App Bundle
4. Host the Digital Asset Links file on your domain
5. More details in `docs/ANDROID_APP_LINKS.md` and `docs/HOW_TO_GENERATE_APP_LINK.md`

## Notes
- The frontend communicates with the .NET backend via HTTP APIs
- User data is stored in the MySQL database
- Both frontend and backend servers need to be running for full functionality

## Overview
This is an Angular application for job preparation, including features like AI interviews, coding tests, resume templates, and interview preparation.

## Prerequisites
- Node.js (version 16 or higher)
- npm (comes with Node.js)

## Setup Instructions

### 1. Install Dependencies
```bash
npm install
```

### 2. Run the Application
```bash
npm start
```
or
```bash
ng serve
```

The application will be available at http://localhost:4201/

## Backend Setup

This application requires a backend server to function properly. You have four options:

### Option 1: Use the Temporary Node.js Backend (Quick Start)
1. Start the temporary backend server:
   ```bash
   node simple-backend.js
   ```
2. The backend will run on http://localhost:5000
3. The Angular frontend will automatically connect to this backend

### Option 2: Use the .NET Backend with SQL Server (Recommended for Production)
1. Follow the instructions in `NET_BACKEND_SETUP.md` to set up the .NET backend with SQL Server
2. Run the .NET backend server (typically on port 5050)
3. The Angular frontend will automatically connect to the backend at http://localhost:5050/api

### Option 3: Use the .NET Backend with MySQL
1. Follow the instructions in `MYSQL_BACKEND_SETUP.md` to set up the .NET backend with MySQL
2. Run the .NET backend server (typically on port 5050)
3. The Angular frontend will automatically connect to the backend at http://localhost:5050/api

### Option 4: Temporary Local Storage (Development Only)
If you don't have any backend running, the application will show error messages when trying to create accounts or log in. For development purposes, you can switch to local storage mode by following the instructions in `DEVELOPMENT_MODE.md`.

## Database Setup

### For SQL Server
Follow the instructions in `NET_BACKEND_SETUP.md` to set up the database.

### For MySQL
1. Use the SQL script in `database-setup.sql` to create the database and tables in MySQL Workbench
2. Follow the instructions in `MYSQL_BACKEND_SETUP.md` to configure the .NET backend

### For Existing "yash" Database
If you have an existing "yash" database in MySQL Workbench but tables are not created, follow the instructions in `YASH_DATABASE_FIX.md` to fix the database.

## Troubleshooting Database Issues

If you're having issues with MySQL Workbench not saving data, refer to `MYSQL_TROUBLESHOOTING.md` for detailed troubleshooting steps.

## Mobile App
To build the mobile app for Android:
```bash
npm run build-android
```

To open the Android project in Android Studio:
```bash
npm run open-android
```

## Troubleshooting

### "Failed to create account" Error
This error typically occurs when:
1. The backend server is not running
2. The backend server is running on a different port
3. There's a network connectivity issue

To resolve this:
1. Ensure a backend server is running on port 5050
2. Check that there are no firewall issues blocking the connection
3. Verify the API endpoints are correctly implemented

### Backend Not Responding
If you see "Unable to connect to the backend server" message:
1. Make sure you've started a backend server (temporary, SQL Server, or MySQL)
2. Check that the backend is running on http://localhost:5050
3. Verify that CORS is properly configured in the backend to allow requests from http://localhost:4201

## Development Guides
- `NET_BACKEND_SETUP.md`: Instructions for setting up the .NET backend with SQL Server
- `MYSQL_BACKEND_SETUP.md`: Instructions for setting up the .NET backend with MySQL
- `API_DOCUMENTATION.md`: Details about the expected API endpoints
- `DEVELOPMENT_MODE.md`: Guide for switching between backend and local storage modes
- `TEMPORARY_BACKEND.md`: Information about the temporary Node.js backend
- `MYSQL_WORKBENCH_GUIDE.md`: Guide for using MySQL Workbench
- `MYSQL_TROUBLESHOOTING.md`: Troubleshooting guide for MySQL issues
- `YASH_DATABASE_FIX.md`: Fix guide for the specific "yash" database issue
- `docs/ANDROID_APP_LINKS.md`: Guide for setting up Android App Links
- `docs/HOW_TO_GENERATE_APP_LINK.md`: Instructions for generating and using Android App Links
- `database-setup.sql`: SQL script for creating the database schema in MySQL Workbench