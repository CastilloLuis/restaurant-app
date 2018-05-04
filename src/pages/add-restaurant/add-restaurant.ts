import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

@IonicPage()
@Component({
  selector: 'page-add-restaurant',
  templateUrl: 'add-restaurant.html',
  providers: [Geolocation]
})
export class AddRestaurantPage {

  location = {
    lat: 0,
    long: 0
  }

  locationList = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public geolocation: Geolocation,
              public toast: ToastController) {
  }

  locateRestaurant() {
    console.log('locate restaurant');
    this.geolocation.getCurrentPosition({timeout: 6000})
      .then( (data) => {
        this.location.lat = data.coords.latitude;
        this.location.long = data.coords.longitude;
        this.locationList = true;
      })
      .catch( (err) => {
        let toast = this.toast.create({
          message: 'Can not get the position...',
          duration: 2000
        });
        toast.present();
      })
  }

  takePicture() {
    console.log('taking picture');
  }

} // FINAL
