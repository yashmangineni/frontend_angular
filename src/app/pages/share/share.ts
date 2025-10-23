import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-share',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './share.html',
  styleUrls: ['./share.css']
})
export class Share implements OnInit {
  appName = 'CrackIT Job';
  appVersion = '1.0.0';
  downloadUrl = 'https://example.com/download/crackit-job.apk'; // This should be replaced with actual URL
  
  constructor() { }

  ngOnInit(): void { }

  downloadAPK(): void {
    // In a real implementation, this would trigger the APK download
    // For now, we'll just show an alert
    alert('APK download would start now. In a real app, this would download the actual APK file.');
    
    // Uncomment the following line to actually attempt a download:
    // window.location.href = this.downloadUrl;
  }

  shareApp(): void {
    if (navigator.share) {
      navigator.share({
        title: this.appName,
        text: 'Check out this awesome interview preparation app!',
        url: 'https://example.com' // Replace with actual app URL
      }).catch((error) => console.log('Error sharing', error));
    } else {
      // Fallback for browsers that don't support Web Share API
      this.copyToClipboard();
    }
  }

  copyToClipboard(): void {
    const text = 'Check out this awesome interview preparation app! Download here: https://example.com';
    navigator.clipboard.writeText(text).then(() => {
      alert('Link copied to clipboard!');
    }).catch(err => {
      console.error('Failed to copy: ', err);
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = text;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      alert('Link copied to clipboard!');
    });
  }
}