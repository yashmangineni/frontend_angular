# .NET Backend Setup Guide

This guide explains how to set up the .NET backend for the Freshers Job application.

## Prerequisites
- .NET SDK 6.0+
- Visual Studio 2022 or VS Code with C# extension
- MySQL Server 8.0+

## Project Setup

1. Clone the .NET backend repository
2. Open the solution in Visual Studio or VS Code
3. Restore NuGet packages:
   ```bash
   dotnet restore
   ```

## Database Configuration

1. Update the connection string in appsettings.json:
   ```json
   {
     "ConnectionStrings": {
       "DefaultConnection": "Server=localhost;Database=FreshersJobDb;User Id=username;Password=password;"
     }
   }
   ```
2. Run database migrations:
   ```bash
   dotnet ef database update
   ```

## API Endpoints

The backend provides the following API endpoints:

- `POST /api/users` - Create a new user
- `POST /api/login` - User login
- `GET /api/users?email={email}` - Get user by email
- `GET /api/interview-questions` - Get interview questions
- `POST /api/interview-answers` - Submit interview answers
- `GET /api/coding-tests` - Get coding tests
- `POST /api/coding-test-results` - Submit coding test results

## Running the Backend

1. Start the .NET backend server:
   ```bash
   dotnet run
   ```
2. Verify the server is running at http://localhost:5000

## Testing API Endpoints

Use tools like Postman or curl to test the API endpoints. For example:
```bash
curl -X POST http://localhost:5000/api/login \
  -H "Content-Type: application/json" \
  -d '{"email":"user@example.com", "password":"password"}'
```

## Troubleshooting

If you encounter issues:
- Verify the database connection string is correct
- Check that MySQL server is running
- Ensure the database schema is created and migrated
- Verify the .NET SDK version matches the project requirements
