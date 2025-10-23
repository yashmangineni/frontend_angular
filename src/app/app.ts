import { Component, signal, OnInit, NgZone } from '@angular/core';
import { Router, RouterLink, NavigationEnd, Event } from '@angular/router';
import { NgIf, CommonModule } from '@angular/common';
import { AuthService } from './services/auth.service';
import { DeeplinkService } from './services/deeplink.service';
import { RouterOutlet } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  protected readonly title = signal('freshers-angular');
  showHeaderFooter = true;
  menuOpen = false;

  constructor(
    public auth: AuthService, 
    public router: Router,
    private ngZone: NgZone,
    private deeplinkService: DeeplinkService
  ) {
    // Listen to route changes to determine if header/footer should be shown
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      // Hide header/footer on login, signup pages
      // Show header/footer on all other pages including interview preparation (/prep)
      const hideOnRoutes = ['/login', '/signup', '/loading'];
      this.showHeaderFooter = !hideOnRoutes.some(route => event.url.startsWith(route));
    });
  }

  async ngOnInit() {
    // Set initial state based on current route
    const hideOnRoutes = ['/login', '/signup', '/loading'];
    this.showHeaderFooter = !hideOnRoutes.some(route => this.router.url.startsWith(route));
    
    // Initialize back button handling for Android
    this.initializeBackButtonHandling();
  }

  private async initializeBackButtonHandling() {
    try {
      // Dynamically import Capacitor App plugin for back button handling
      const { App: CapacitorApp } = await import('@capacitor/app');
      
      // Listen for back button presses
      CapacitorApp.addListener('backButton', (data: { canGoBack: boolean }) => {
        this.ngZone.run(() => {
          // Always try to go back in history first
          if (window.history.length > 1) {
            // If we have history, go back
            window.history.back();
          } else {
            // If no history, go to main page instead of closing app
            this.navigateToMainPage();
          }
        });
      });
    } catch (error) {
      console.log('Back button listener not available (probably not running in Capacitor)', error);
    }
  }

  private navigateToMainPage() {
    // Instead of closing the app, navigate to a main page
    if (this.auth.isLoggedIn()) {
      // If user is logged in, go to main page
      this.router.navigate(['/interview']);
    } else {
      // If user is not logged in, go to login page
      this.router.navigate(['/login']);
    }
  }

  logout() {
    this.auth.logout();
    this.router.navigateByUrl("/login");
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }

  getCurrentUserName(): string {
    const user = this.auth.getCurrentUser();
    // Handle case where user or user.name might be undefined
    return user && user.name ? user.name : (user && user.email ? user.email.split('@')[0] : 'User');
  }
}