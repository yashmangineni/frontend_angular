import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-interview',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './interview.html',
  styleUrls: ['./interview.css']
})
export class Interview {
  constructor(public auth: AuthService, public router: Router) {}
}
