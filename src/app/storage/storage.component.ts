import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-storage',
  imports: [],
  templateUrl: './storage.component.html',
  styleUrl: './storage.component.css'
})
export class StorageComponent {

  constructor(private cookie : CookieService) {}

  sessionValue: string = "";
  cookieValue: string = "";
  localValue: string = "";

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

  // localstorage methods
  setLocalStorage() {
    localStorage.setItem('name', 'local');
    localStorage.setItem('pass', 'local1234');
  }
  getLocalStorage() {
    this.localValue = localStorage.getItem('pass') ?? '';
  }
  removeLocalStorage() {
    localStorage.removeItem('name');
    this.localValue = '';
  }
  clearLocalStorage() {
    localStorage.clear();
    this.localValue = '';
  }



  // cookie methods
  setCookie() {
    this.cookie.set('name', 'cookie',1);
    this.cookie.set('pass', 'cookie1234');
  }
  getCookie() {
    this.cookieValue = this.cookie.get('pass') ?? '';
  }
  removeCookie() {
    this.cookie.delete('name');
    this.cookieValue = '';
  }
  clearCookie() {
    this.cookie.deleteAll();
    this.cookieValue = '';
  }
}
