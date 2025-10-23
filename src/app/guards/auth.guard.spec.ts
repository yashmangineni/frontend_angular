import { TestBed } from '@angular/core/testing';
import { AuthGuard } from './auth.guard';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

describe('AuthGuard', () => {
  let guard: AuthGuard;
  let authService: AuthService;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AuthGuard,
        {
          provide: AuthService,
          useValue: {
            isLoggedIn: jasmine.createSpy('isLoggedIn').and.returnValue(false),
            currentUserEmail: jasmine.createSpy('currentUserEmail').and.returnValue(null)
          }
        },
        {
          provide: Router,
          useValue: {
            navigate: jasmine.createSpy('navigate')
          }
        }
      ]
    });
    guard = TestBed.inject(AuthGuard);
    authService = TestBed.inject(AuthService);
    router = TestBed.inject(Router);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('should deny access when user is not logged in', () => {
    const result = guard.canActivate({} as any, {} as any);
    expect(result).toBeFalse();
    expect(router.navigate).toHaveBeenCalledWith(['/login']);
  });

  it('should allow access when user is logged in', () => {
    (authService.isLoggedIn as jasmine.Spy).and.returnValue(true);
    const result = guard.canActivate({} as any, {} as any);
    expect(result).toBeTrue();
    expect(router.navigate).not.toHaveBeenCalled();
  });
});