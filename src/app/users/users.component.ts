import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from './users';
import { actionSaveUser } from './store/users.action';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import * as moment from 'moment';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  count$!: Observable<number>;
  user$!: Observable<Users>;

  constructor(private store: Store<{ count: number, user: Users }>, private _location: Location) {
    this.count$ = store.select('count');
    this.user$ = store.select('user');
  }

  ngOnInit() {
    console.log(moment().format('DD/MM/YYYY'));
  }

  setUser() {
    let data: Users = {
      username: "admin",
      email: "admin@gmail.com"
    }

    this.store.dispatch(actionSaveUser({ data: data }));
    this._location.back()
  }

}
