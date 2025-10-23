import { TestBed } from '@angular/core/testing';
import { AuthService } from './auth.service';
import { DatabaseService } from './backend/db.service';
import { of, throwError } from 'rxjs';

describe('AuthService', () => {
  let service: AuthService;
  let dbService: jasmine.SpyObj<DatabaseService>;

  beforeEach(() => {
    const dbServiceSpy = jasmine.createSpyObj('DatabaseService', ['saveUser', 'getUserByEmail']);

    TestBed.configureTestingModule({
      providers: [
        AuthService,
        { provide: DatabaseService, useValue: dbServiceSpy }
      ]
    });
    service = TestBed.inject(AuthService);
    dbService = TestBed.inject(DatabaseService) as jasmine.SpyObj<DatabaseService>;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should signup user successfully', () => {
    const mockResponse = { success: true, message: 'User saved successfully' };
    dbService.saveUser.and.returnValue(of(mockResponse));

    spyOn(localStorage, 'getItem').and.returnValue(null);
    spyOn(localStorage, 'setItem');

    const result = service.signup('John Doe', 'john@example.com', 'Password123!');

    expect(result.ok).toBe(true);
    expect(dbService.saveUser).toHaveBeenCalledWith({
      name: 'John Doe',
      email: 'john@example.com',
      password: 'Password123!'
    });
  });

  it('should fail signup with existing email', () => {
    spyOn(localStorage, 'getItem').and.returnValue(JSON.stringify([
      { name: 'Existing User', email: 'john@example.com', password: 'Password123!' }
    ]));

    const result = service.signup('John Doe', 'john@example.com', 'Password123!');

    expect(result.ok).toBe(false);
    expect(result.message).toBe('Email already registered');
  });

  it('should fail signup with database error', () => {
    const mockResponse = { success: false, message: 'Invalid email format' };
    dbService.saveUser.and.returnValue(of(mockResponse));

    spyOn(localStorage, 'getItem').and.returnValue(null);

    const result = service.signup('John Doe', 'invalid-email', 'Password123!');

    expect(result.ok).toBe(false);
    expect(result.message).toBe('Invalid email format');
  });

  it('should login user successfully', () => {
    spyOn(localStorage, 'getItem').and.returnValue(JSON.stringify([
      { name: 'John Doe', email: 'john@example.com', password: 'Password123!' }
    ]));
    spyOn(localStorage, 'setItem');

    const result = service.login('john@example.com', 'Password123!');

    expect(result.ok).toBe(true);
    expect(localStorage.setItem).toHaveBeenCalledWith('auth_current_email', 'john@example.com');
  });

  it('should fail login with invalid credentials', () => {
    spyOn(localStorage, 'getItem').and.returnValue(JSON.stringify([
      { name: 'John Doe', email: 'john@example.com', password: 'Password123!' }
    ]));

    const result = service.login('john@example.com', 'WrongPassword');

    expect(result.ok).toBe(false);
    expect(result.message).toBe('Invalid email or password');
  });

  it('should logout user', () => {
    spyOn(localStorage, 'removeItem');

    service.logout();

    expect(localStorage.removeItem).toHaveBeenCalledWith('auth_current_email');
    expect(service.currentUserEmail()).toBeNull();
  });

  it('should check if user is logged in', () => {
    spyOn(localStorage, 'getItem').and.returnValue('john@example.com');

    const isLoggedIn = service.isLoggedIn();

    expect(isLoggedIn).toBe(true);
  });

  it('should get current user', () => {
    spyOn(localStorage, 'getItem').and.returnValues(
      'john@example.com',
      JSON.stringify([
        { name: 'John Doe', email: 'john@example.com', password: 'Password123!' }
      ])
    );

    const user = service.getCurrentUser();

    expect(user).toEqual({ name: 'John Doe', email: 'john@example.com', password: 'Password123!' });
  });
});