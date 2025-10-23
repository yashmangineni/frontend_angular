import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-loading',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './loading.html',
  styleUrls: ['./loading.css']
})
export class LoadingComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    // Simulate a loading delay and then navigate to the login page
    setTimeout(() => {
      // Always redirect to login page after loading
      this.router.navigate(['/login']);
    }, 2000); // 2 seconds delay
  }
}