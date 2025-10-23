import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { App } from '@capacitor/app';

@Injectable({
  providedIn: 'root'
})
export class DeeplinkService {
  constructor(
    private router: Router
  ) {
    this.initializeDeeplinks();
  }

  private async initializeDeeplinks() {
    // Listen for app launches with URLs
    App.addListener('appUrlOpen', (event: any) => {
      this.handleDeeplink(event.url);
    });

    // Check if app was launched with a URL
    const launchUrl = await App.getLaunchUrl();
    if (launchUrl && launchUrl.url) {
      this.handleDeeplink(launchUrl.url);
    }
  }

  private handleDeeplink(url: string) {
    console.log('Deeplink received:', url);
    
    try {
      // Parse the URL
      const domain = 'freshers.example.com';
      const urlObj = new URL(url);
      
      // Handle different paths
      if (urlObj.hostname === domain || urlObj.protocol === 'freshers:') {
        const path = urlObj.pathname || '/';
        
        // Remove leading slash
        const cleanPath = path.startsWith('/') ? path.substring(1) : path;
        
        switch (cleanPath) {
          case '':
          case 'home':
            this.router.navigate(['/']);
            break;
          case 'interview':
            this.router.navigate(['/interview']);
            break;
          case 'login':
            this.router.navigate(['/login']);
            break;
          case 'signup':
            this.router.navigate(['/signup']);
            break;
          case 'profile':
            this.router.navigate(['/profile']);
            break;
          case 'rate':
            this.router.navigate(['/rate']);
            break;
          case 'share':
            this.router.navigate(['/share']);
            break;
          default:
            // Handle parameterized routes
            if (cleanPath.startsWith('jobs/')) {
              const jobId = cleanPath.split('/')[1];
              this.router.navigate(['/jobs', jobId]);
            } else {
              // Default to home for unknown paths
              this.router.navigate(['/']);
            }
        }
      }
    } catch (error) {
      console.error('Error handling deeplink:', error);
      // Default to home if URL parsing fails
      this.router.navigate(['/']);
    }
  }
}