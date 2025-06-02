import { Component } from '@angular/core';

@Component({
  selector: 'app-storage',
  imports: [],
  templateUrl: './storage.component.html',
  styleUrl: './storage.component.css'
})
export class StorageComponent {

  sessionValue: string = "";

  setSessionStorage() {
    // sessionStorage.setItem('name', 'session');
    sessionStorage.setItem('pass', 'session1234');
  }

  getSessionStorage() {
   this.sessionValue = sessionStorage.getItem('pass') ?? '';
   
    
    
  }
  removeSessionStorage() {
   sessionStorage.removeItem('session');
    this.sessionValue = '';

  }
  clearSessionStorage() {
   sessionStorage.clear();
   this.sessionValue = '';
  }
}
