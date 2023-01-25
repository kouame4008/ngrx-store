import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IuserList } from './userList.interface';
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private _http: HttpClient) { }

  userList(): Observable<IuserList[]> {
    return this._http.get<IuserList[]>('localhost:8000/api/user/users-list');
  }
}
