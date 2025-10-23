# Authentication Guard

This guard protects routes that require authentication. Users must be logged in to access protected routes.

## How it works

1. The `AuthGuard` checks if the user is logged in using the `AuthService`
2. If the user is logged in, access is granted
3. If the user is not logged in, they are redirected to the login page

## Protected Routes

The following routes are protected by the authentication guard:
- `/interview`
- `/contact`
- `/privacy`
- `/ai-interviews`
- `/coding-test`
- `/profile`
- `/hr`
- `/aptitude`
- `/resume-template`
- `/prep` and all sub-routes

## Usage

The guard is automatically applied to routes in `app.routes.ts` using the `canActivate` property.

## Testing

Unit tests for the guard are located in `auth.guard.spec.ts`.