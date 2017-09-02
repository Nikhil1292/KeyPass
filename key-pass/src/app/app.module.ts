import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import {
  KeyPassListComponent,
  KeyPassDetailComponent
} from '../pages';

import {
  AppConstant,
  CryptoService
} from '../shared';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

const services = [
  CryptoService,
  AppConstant
]

const component = [
  KeyPassListComponent,
  KeyPassDetailComponent
];

@NgModule({
  declarations: [
    MyApp,
    component
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    component
  ],
  providers: [
    StatusBar,
    SplashScreen,
    services,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
