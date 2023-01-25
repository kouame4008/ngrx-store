import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounterComponent } from './counter/counter.component';
import { UsersComponent } from './users/users.component';
import { UsersGuard } from './users/users.guard';

const routes: Routes = [
  {
    path: '',
    component: CounterComponent
  },
  {
    path: 'users',
    component: UsersComponent,
    canActivate: [UsersGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
