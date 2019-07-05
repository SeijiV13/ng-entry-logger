import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EntryLoggerModule } from 'projects/entry-logger/src/public_api';

@NgModule({
  declarations: [
    AppComponent,  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EntryLoggerModule.forRoot({
    url: '/message-item',
    apiKey: 'AIzaSyA0KYE73SnQywhGgVYMAstW4Je3A1GL2W8',
    authDomain: 'en-logger.firebaseapp.com',
    databaseURL: 'https://en-logger.firebaseio.com',
    projectId: 'en-logger',
    storageBucket: 'en-logger.appspot.com',
    messagingSenderId: '415314818217',
  })

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
