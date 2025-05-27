import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  constructor(private router:Router) { }

  loginData(){
// user verification logic
    // For demonstration, we will just navigate to the dashboard

    this.router.navigate(['']);
  }

}
