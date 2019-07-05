# NgEntryLogger

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.2.1.

## What is Entry Logger
NgEntryLogger is library for Angular 4+ that will create a UI for Application Logs, it will also provide team collabaration for
monitoring Error counts and simple messaging feature(Coming soon)

## Getting Started
NgEntryLogger includes several dependencies such as Angular Fire
and Firebase, this will require several setup.

## How to Install
#### Step 1

Install entry-logger from npm:

```npm install entry-logger --save```

#### Step 2

Add needed package to NgModule imports:

```import { EntryLoggerModule } from 'entry-logger';
  @NgModule({
  ...
  imports: [EntryLoggerModule.forRoot(),...]
  ...
})
```

#### Step 3
Install Angular Fire 2 and Firebase from npm:

```npm install angularfire2 firebase --save```


#### Step 4
Install ngx-bootstrap from npm:
```npm install ngx-bootstrap --save```


#### Step 5
Install font-awesome from npm:
```npm install font-awesome --save```

Add node_modules/font-awesome/css/font-awesome.css on angular.json
inside styles

 ```"styles": [
     "src/styles.scss",
     "node_modules/font-awesome/css/font-awesome.css"
    ],
```

#### Creating project in firebase
Note* this is required for saving logs in the project, entry logger will not work as firebase will serve as your database

#### Go to [firebase.google.com](https://firebase.google.com)
![Firebase](src/images/firebase.PNG "Title")

#### Click get Started and create a project
![Creating Project](src/images/create-project.PNG "Title")


#### Go to Database and click Create Database (choose the settings you want), this will create a nosql database and will redirect you the cloud firestore page.

![Firestore](src/images/firestore.PNG "Title")

#### Now go to Project Settings and Select the Web Platform to add a project

![Project Settings](src/images/settings.PNG "Title")

#### Register the app with your project name and this will generate the Configuration to connect on your app

![Configuration](src/images/configuration.PNG "Title")

On your application place the firebaseConfig on the forRoot
of EntryLoggerModule


``` 
EntryLoggerModule.forRoot({
      url: '/message-item',
      apiKey: "AIzaSyBOCXrpjl6RFEj13BWZYX39EQDkiwgmNGA",
      authDomain: "test-project-416eb.firebaseapp.com",
      databaseURL: "https://test-project-416eb.firebaseio.com",
      projectId: "test-project-416eb",
      storageBucket: "test-project-416eb.appspot.com",
      messagingSenderId: "38629406653",
    })
```
The url property is user defined will create a new collection on your firebase project when you add a log using  UpdateLogService,

### Issues
you might encountered Missing or insufficient permissions 
on requesting from Angular firestore, this is casued by not permitting to read and write in the database,

Replace the Rules in the Firebase under Database with this code to resolve issue

```
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write;
    }
  }
}
```

### Github and Documentation
Go to [Ng-Entry-Logger-Repository]](https://github.com/SeijiV13/ng-entry-logger) for full documentation