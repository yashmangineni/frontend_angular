# Temporary Backend Guide

This guide explains how to use the temporary Node.js backend for development when the .NET backend is not available.

## Purpose

The temporary backend allows you to develop and test the Angular frontend without requiring the full .NET backend to be running. It provides:
- User authentication (signup/login)
- In-memory data storage
- JWT token generation
- API endpoints that mimic the production backend

## Setup

1. Ensure all dependencies are installed:
   ```bash
   npm install
   ```

2. The temporary backend uses the following files:
   - `simple-backend.js` - The Node.js server
   - `users.json` - Persistent user storage

## Starting the Temporary Backend

1. Start the temporary backend server:
   ```bash
   npm run start-backend
   ```
   or
   ```bash
   node simple-backend.js
   ```

2. Verify the server is running at http://localhost:5000

## API Endpoints

The temporary backend provides the same API endpoints as the production .NET backend:

- `POST /api/users` - Create a new user
- `POST /api/login` - User login
- `GET /api/users?email={email}` - Get user by email

## Testing the Connection

You can test the API endpoints using curl:

```bash
# Create a user
curl -X POST http://localhost:5000/api/users \
  -H "Content-Type: application/json" \
  -d '{"name":"John Doe", "email":"john@example.com", "password":"password"}'

# Login
curl -X POST http://localhost:5000/api/login \
  -H "Content-Type: application/json" \
  -d '{"email":"john@example.com", "password":"password"}'
```

## Data Persistence

User data is stored in the `users.json` file, which persists between server restarts.

## Switching Back to .NET Backend

When the .NET backend is available:
1. Stop the temporary backend (Ctrl+C)
2. Start the .NET backend server
3. Continue development with the full backend functionality