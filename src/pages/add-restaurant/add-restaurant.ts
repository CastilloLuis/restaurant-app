import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController, ViewController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { Camera } from '@ionic-native/camera';
import { RestaurantService } from '../../services/restaurant.service';

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

  // FORM VARS
  name: string;
  rating: number;

  // CAMERA OPTIONS
  options = {
    quality: 100,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, public geolocation: Geolocation,
              public toast: ToastController, public camera: Camera, public restService: RestaurantService,
              public loadingCtrl: LoadingController, public viewCtrl: ViewController) {
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
          message: 'Can not get the position...'+err.message,
          duration: 2000
        });
        toast.present(); 
      });
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
 
  addRestaurant() {
    //alert(this.name+"-"+this.restimages[0]+"-"+this.rating+"-"+this.location);
    if(this.name==='' || this.rating===undefined){
      alert('Please fill all the fields...');
    }else{
      this.restService.addRestaurant(this.name, this.restimages, this.rating, this.location);
      let loader = this.loadingCtrl.create({content: 'Adding restaurant...', duration: 2000});
      loader.onDidDismiss(() => this.showMessage());
      loader.present();
    }
  }

  showMessage(){
    let mytoast = this.toast.create({
      message: 'Restaurant added successfully!',
      duration: 3000,
      cssClass: 'addedToast'
    });
    mytoast.onDidDismiss( () => this.viewCtrl.dismiss());
    mytoast.present();
  }

} // FINAL
