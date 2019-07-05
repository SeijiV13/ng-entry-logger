# NgEntryLogger

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.2.1.

## What is Entry Logger
NgEntryLogger is library for Angular 4+ that will create a UI for Application Logs, it will also provide team collabaration for
monitoring Error counts and simple messaging feature(Coming soon)

## Getting Started
NgEntryLogger includes several dependencies such as Angular Fire
and Firebase, this will require several setup.

## How to Install
Step 1

Install entry-logger from npm:

```npm install entry-logger --save```

Add needed package to NgModule imports:

```import { EntryLoggerModule } from 'entry-logger';
  @NgModule({
  ...
  imports: [EntryLoggerModule.forRoot(),...]
  ...
})
```