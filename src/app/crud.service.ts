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

postData(data : User2 ){
  return this._http.post(this.base_url, data);

}

getDataById(id: number) {
  return this._http.get<User2>(`${this.base_url}/${id}`);
}

putDataById(id: number, data: User2) {
  return this._http.put(`${this.base_url}/${id}`, data);
}

deleteDataById(id: number) {
  return this._http.delete(`${this.base_url}/${id}`); 
}
}


