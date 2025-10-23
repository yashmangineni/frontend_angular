# API Documentation for .NET Backend

This document describes the API endpoints that the Angular frontend expects from the .NET backend.

## Base URL
- Development: `http://localhost:5000/api`
- Production: `https://your-production-api-url.com/api`

## Authentication Endpoints

### 1. User Signup
**POST** `/users`

**Request Body:**
```json
{
  "name": "string",
  "email": "string",
  "password": "string"
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "id": 0,
    "name": "string",
    "email": "string"
  },
  "message": "string"
}
```

### 2. User Login
**POST** `/login`

**Request Body:**
```json
{
  "email": "string",
  "password": "string"
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "token": "string",
    "user": {
      "id": 0,
      "name": "string",
      "email": "string"
    }
  },
  "message": "string"
}
```

### 3. Get User by Email
**GET** `/users?email={email}`

**Response:**
```json
{
  "success": true,
  "data": {
    "id": 0,
    "name": "string",
    "email": "string"
  },
  "message": "string"
}
```

## Error Responses

All endpoints should return consistent error responses:

**Error Response Format:**
```json
{
  "success": false,
  "message": "Error description"
}
```

## Implementation Notes

1. All responses should follow the `ApiResponse<T>` format with `success`, `data`, and `message` properties.
2. Passwords should be securely hashed before storing in the database.
3. JWT tokens should be used for authentication.
4. CORS should be configured to allow requests from the Angular frontend.
5. SQL Server should be used as the database backend.