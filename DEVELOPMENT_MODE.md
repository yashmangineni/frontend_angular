# Development Mode Guide

This guide explains how to switch between using the backend server and local storage for development purposes.

## Using the Backend Server (Recommended)

By default, the application is configured to use the backend server. To use this mode:

1. Ensure the .NET backend is running on http://localhost:5000
2. Make sure the Angular application is using the AuthService (not AuthServiceLocal)

The app.config.ts should import the HttpClientModule:
```typescript
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    // ... other providers
    provideHttpClient(),
    // ... other providers
  ]
};
```

And components should inject the AuthService:
```typescript
import { AuthService } from '../services/auth.service';
```

## Using Local Storage (Development Only)

For development when the backend is not available, you can switch to using local storage:

1. Modify app.config.ts to remove or comment out provideHttpClient():
```typescript
// import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    // ... other providers
    // provideHttpClient(), // Comment out or remove this line
    // ... other providers
  ]
};
```

2. In components that use authentication, change the import from AuthService to AuthServiceLocal:
```typescript
// import { AuthService } from '../services/auth.service';
import { AuthServiceLocal as AuthService } from '../services/auth.service.local';
```

## Switching Between Modes

To switch back to backend mode:
1. Uncomment or add provideHttpClient() in app.config.ts
2. Change imports back to use AuthService instead of AuthServiceLocal

## When to Use Each Mode

### Use Backend Mode When:
- The backend server is available and running
- Testing actual API integration
- Working on features that require server-side functionality
- Preparing for production deployment

### Use Local Storage Mode When:
- Backend server is not available
- Working on UI components that don't require server interaction
- Quick prototyping
- Offline development

## Important Notes

- Local storage mode should only be used for development
- Data stored in local storage is not synchronized with the backend
- User accounts created in local storage mode will not be available in backend mode
- Always test with backend mode before deploying to production