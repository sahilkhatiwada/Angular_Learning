import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User2 } from './user2';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

base_url ="http://localhost:3000/users";
  constructor(private _http: HttpClient) { }

getData() {
  return this._http.get<User2[]>(this.base_url);
}
}


