import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterModule } from './counter/counter.module';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './counter/store/counter.reducer';
import { storageMetaReducer } from './shared/storage/storage.metareducer';
import { UsersModule } from './users/users.module';
import { userReducer } from './users/store/users.reducer';
import { userListReducer } from './users/store/userList.reducer';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ user: userReducer, count: counterReducer, userList: userListReducer }, {
      metaReducers: [storageMetaReducer]
    }),
    UsersModule,
    CounterModule,
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
