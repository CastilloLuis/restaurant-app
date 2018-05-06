import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

// MY PAGES
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AddRestaurantPage } from '../pages/add-restaurant/add-restaurant';
import { ViewRestaurantPage } from '../pages/view-restaurant/view-restaurant';

// GOOGLE MAPS
import { AgmCoreModule } from '@agm/core';

// Import ionic2-rating module
import { Ionic2RatingModule } from 'ionic2-rating';
import { RestaurantService } from '../services/restaurant.service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AddRestaurantPage,
    ViewRestaurantPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    Ionic2RatingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyABL10rVzKJzz95UMOp1Jy6mkpMMGsRGAg'
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AddRestaurantPage,
    ViewRestaurantPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RestaurantService
  ]
})
export class AppModule {}
