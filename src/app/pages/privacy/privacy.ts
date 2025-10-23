import { Component } from '@angular/core';

@Component({
  selector: 'app-privacy',
  standalone: true,
  imports: [],
  templateUrl: './privacy.html',
  styleUrls: ['./privacy.scss']
})
export class Privacy {
  appName = 'CrackIT Job'; // <-- change to your chosen app name
  effectiveDate = 'September 22, 2025'; // <-- update as needed
  contactEmail = 'support@CrackIT.com'; // <-- update
  //websiteUrl = 'https://yourapp.example.com'; // <-- update
}
