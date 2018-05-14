import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, AlertController } from 'ionic-angular';
import { AuthService } from '../../services/auth.service';
import { WelcomePage } from '../welcome/welcome';


@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
  providers: [AuthService]
})
export class RegisterPage {

  useremail: string;
  userpassword: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController,
              public authService: AuthService, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  close() {
    this.viewCtrl.dismiss();
  }

  userRegister() {
    this.authService.userRegister(this.useremail, this.userpassword)
      .then((data) => {
        console.log(data);
        this.alertMessage("Registration successfull!", null)
      })
      .catch((err) => {
        console.log(err);
        this.alertMessage("Error :(", err);
      })
  }

  alertMessage(title: string, message: string) {
    let myalert = this.alertCtrl.create({
      title: title,
      message: message
    });
    myalert.present();
    this.viewCtrl.dismiss();
  }
  
}
