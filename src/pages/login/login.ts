import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, AlertController } from 'ionic-angular';
import { AuthService } from '../../services/auth.service';
import firebase from 'firebase';
import { HomePage } from '../home/home';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers: [AuthService]
})
export class LoginPage {

  useremail: string;
  userpassword: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController,
              public authService: AuthService, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  close() {
    this.viewCtrl.dismiss();
  }

  login() {
    this.authService.userLogin(this.useremail, this.userpassword)
      .then((data) => {
        this.alertMessage("Welcome: "+this.useremail, null);
        
      })
      .catch((err) => {
        this.alertMessage("Error :(", err);
      })
  }

  alertMessage(title: string, message: string) {
    let myalert = this.alertCtrl.create({
      title: title,
      message: message
    });
    myalert.present();
  }

}
