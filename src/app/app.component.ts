import { Component, ViewChild } from '@angular/core';
import { Platform, NavController, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// ROOT PAGE
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { WelcomePage } from '../pages/welcome/welcome';
import { AuthService } from '../services/auth.service';

// FIREBASE
import firebase from 'firebase';

@Component({
  templateUrl: 'app.html',
  providers: [AuthService]
})
export class MyApp {
  rootPage:any = WelcomePage;
  homepage = HomePage;
  @ViewChild('content') nav: NavController;

  userConnected = false;


  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public menuCtrl: MenuController,
              public authService: AuthService) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
    firebase.initializeApp({
      apiKey: "AIzaSyDFWskIErLuqoRa5FcmaR6sg-57lDetGOM",
      authDomain: "restaurans-8cc1c.firebaseapp.com"
    });
    firebase.auth().onAuthStateChanged(
      (user) => {
        if(user != null){
          this.userConnected = true;
          this.nav.setRoot(this.homepage)
        } else {
          this.userConnected = false;
          this.nav.setRoot(this.rootPage);
        }
      }
    )
  }

  goTo(page) {
    this.nav.setRoot(page);
    this.menuCtrl.close();
  }

  logout(){
    this.authService.userLogout();
    this.menuCtrl.close();
  }
}

