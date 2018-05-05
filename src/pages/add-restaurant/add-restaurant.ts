import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { Camera } from '@ionic-native/camera';

@IonicPage()
@Component({
  selector: 'page-add-restaurant',
  templateUrl: 'add-restaurant.html',
  providers: [Geolocation, Camera]
})
export class AddRestaurantPage {

  location = {
    lat: 0,
    long: 0
  }
  
  locationList = false;

  isempty = false;

  restimages = [];

  // CAMERA OPTIONS
  options = {
    quality: 100,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, public geolocation: Geolocation,
              public toast: ToastController, public camera: Camera) {
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
        console.log(err.message)
        let toast = this.toast.create({
          message: 'Can not get the position...'+err,
          duration: 2000
        });
        toast.present(); 
      })
  }

  takePicture() {
    console.log('taking picture');
    this.camera.getPicture(this.options)
      .then( (imageData) => {
        let base64Image = 'data:image/jpeg;base64,' + imageData;
        this.restimages.push(base64Image);
        console.log('you take a picture');
      })
      .catch( (err) => {
        console.log('error: '+err);
      })
  }

} // FINAL
