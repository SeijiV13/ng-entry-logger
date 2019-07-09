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
import { ConfigService } from './services';
import { Config } from './models/Config';
import { CommonModule } from '@angular/common';
import { StatsComponent } from './components/stats/stats.component';
import { MessagingComponent } from './components/messaging/messaging.component';
import { MessageService } from './services/message.service';
import { CryptojsService } from './services/cryptojs.service';
import { LoginComponent } from './components/login/login.component';

const environment = {
  firebase: {
    apiKey: '',
    authDomain: '',
    databaseURL: '',
    projectId: '',
    storageBucket: '',
    messagingSenderId: '',
  }
};

@NgModule({
  declarations: [EntryLoggerComponent,
    HomeComponent,
    LogItemComponent,
    BaseComponent,
    MenuComponent,
    StatsComponent,
    MessagingComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    AccordionModule.forRoot(),
    BrowserAnimationsModule,
    FontAwesomeModule,
    AngularFireModule.initializeApp(environment.firebase, 'En-Logger'),
    AngularFirestoreModule,
  ],
  exports: [EntryLoggerComponent,
    HomeComponent,
    LogItemComponent,
    BaseComponent,
    MenuComponent,
    LoginComponent]
})
export class EntryLoggerModule {

  static forRoot(config: Config) {
    environment.firebase.apiKey = config.apiKey;
    environment.firebase.authDomain = config.authDomain;
    environment.firebase.databaseURL = config.databaseURL;
    environment.firebase.messagingSenderId = config.messagingSenderId;
    environment.firebase.projectId = config.projectId;
    environment.firebase.storageBucket = config.storageBucket;
    return {
      ngModule: EntryLoggerModule,
      providers: [
        UpdateLogService,
        MessageService,
        CryptojsService,
        {
          provide: ConfigService,
          useValue: config
        },
      ]
    };
  }

 }
