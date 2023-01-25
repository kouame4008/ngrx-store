import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { actionSaveUser } from '../users/store/users.action';
import { Users } from '../users/users';
import { decrement, increment } from './store/counter.action';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {
  count$!: Observable<number>;
  user$!: Observable<Users>

  constructor(private store: Store<{ count: number, user: Users }>, private router: Router) {
    this.count$ = store.select('count');
    this.user$ = store.select('user');
  }

  ngOnInit() {
  }


  incrementer() {
    this.store.dispatch(increment());
  }

  decrementer() {
    this.store.dispatch(decrement());
  }

  goToUsers() {
    this.router.navigate(['/users']);
  }

  setUsers() {
    let data: Users = {
      username: "admin",
      email: "admin@gmail.com"
    }

    this.store.dispatch(actionSaveUser({ data: data }));
  }

}
