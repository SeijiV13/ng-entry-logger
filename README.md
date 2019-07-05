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

Go to [firebase.google.com](https://firebase.google.com)
![Firebase](images/firebase.PNG "Title")

Click get Started and create a project
![Creating Project](images/create-project.PNG "Title")