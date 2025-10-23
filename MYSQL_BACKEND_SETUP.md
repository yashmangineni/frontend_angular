# MySQL Backend Setup Guide

This guide explains how to set up the MySQL database for the Freshers Job application.

## Prerequisites
- MySQL Server 8.0+
- MySQL Workbench
- .NET SDK 6.0+

## Database Setup Steps

1. Open MySQL Workbench and connect to your MySQL server
2. Run the database-setup.sql script to create the database and tables
3. Verify that the FreshersJobDb database and all tables are created successfully

## Connection Configuration

The connection details should be configured in the .NET backend's appsettings.json file:

```json
{
  "ConnectionStrings": {
    "DefaultConnection": "Server=localhost;Database=FreshersJobDb;User Id=username;Password=password;"
  }
}
```

## Testing the Connection

1. Start the .NET backend server
2. Verify that it can connect to the MySQL database
3. Test API endpoints using a tool like Postman or curl

## Troubleshooting

If you encounter connection issues:
- Verify MySQL server is running
- Check username and password
- Ensure MySQL port (default 3306) is accessible
- Verify the database name is correct
- Check firewall settings
