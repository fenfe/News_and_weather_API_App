import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import {HttpModule} from '@angular/http';
import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';
import { BreakingPage } from '../pages/breaking/breaking';
import { BusinessPage } from '../pages/business/business';
import { EntertainmentPage } from '../pages/entertainment/entertainment';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Provider } from '../providers/provider/provider';

@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    BreakingPage,
    BusinessPage,
    EntertainmentPage
    
  ],

  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
   

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    BreakingPage,
    BusinessPage,
    EntertainmentPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Provider
  ]
})
export class AppModule {}


@Pipe({
  name: 'dateFormat'
})

export class DateFormatPipe extends DatePipe implements PipeTransform {
  transform(value: any, args?: any): any {
     ///MMM/dd/yyyy 
     return super.transform(value, "MMM/dd/yyyy");
  }
}
