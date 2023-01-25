import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { UsersListeComponent } from './users-liste/users-liste.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [UsersComponent, UsersListeComponent]
})
export class UsersModule { }
