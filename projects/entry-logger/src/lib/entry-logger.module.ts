import { NgModule } from '@angular/core';
import { EntryLoggerComponent } from './entry-logger.component';

import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from 'ngx-icons';
import { UpdateLogService } from './services/update-log.service';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { HomeComponent, LogItemComponent, MenuComponent } from './components';
import { BaseComponent } from './components/base/base.component';
import { AccordionModule } from 'ngx-bootstrap';

const environment = {
  firebase: {
    apiKey: 'AIzaSyA0KYE73SnQywhGgVYMAstW4Je3A1GL2W8',
    authDomain: 'en-logger.firebaseapp.com',
    databaseURL: 'https://en-logger.firebaseio.com',
    projectId: 'en-logger',
    storageBucket: 'en-logger.appspot.com',
    messagingSenderId: '415314818217',
  }
};
@NgModule({
  declarations: [EntryLoggerComponent,
    HomeComponent,
    LogItemComponent,
    BaseComponent,
    MenuComponent],
  imports: [
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    AccordionModule.forRoot(),
    BrowserAnimationsModule,
    FontAwesomeModule,
    AngularFireModule.initializeApp(environment.firebase, 'En-Logger'),
    AngularFirestoreModule,
  ],
  providers: [UpdateLogService],
  exports: [EntryLoggerComponent,
    HomeComponent,
    LogItemComponent,
    BaseComponent,
    MenuComponent]
})
export class EntryLoggerModule { }
