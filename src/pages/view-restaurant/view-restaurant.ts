import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ViewController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { SocialSharing } from '@ionic-native/social-sharing';

@IonicPage()
@Component({
  selector: 'page-view-restaurant',
  templateUrl: 'view-restaurant.html',
  providers: [Geolocation, SocialSharing]
})
export class ViewRestaurantPage {

  restName: string = '';
  restImages: string[] = [];
  restRating: any = ''; 
  restLocation: Object;
  restLat: number = null;
  restLong: number = null;

  constructor(public navCtrl: NavController, public navParams: NavParams, public geolocation: Geolocation,
              public alertCtrl: AlertController, public socialMediaSharing: SocialSharing, public viewCtrl: ViewController) {
    this.restName = navParams.get('name');
    this.restImages = navParams.get('images');
    this.restLocation = navParams.get('location');
    this.restLat = this.restLocation['lat'];
    this.restLong = this.restLocation['long'];
    this.drawRating(navParams.get('rating'));
  }
 
  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewRestaurantPage');
    //alert(JSON.stringify(this.navParams.get('rest')));
  }
  
  close() { this.viewCtrl.dismiss() }

  drawRating(rating: number) { 
    for(let i=0; i<rating; i++){
      this.restRating += ' ⭐ ';
    }
  }

  shareModal() {
    let mymodal = this.alertCtrl.create({
      title: 'Sharing',
      message: 'Share via whatsapp',
      buttons: [
        {
          text: 'SHARE',
          handler: () => this.shareViaWhatsapp(this.restName)
        },
        {
          text: 'CANCEL',
          handler: () => mymodal.dismiss()
        }
      ]
    });
    mymodal.present();
  }

  shareViaWhatsapp(restaurant: string) {
    this.socialMediaSharing.shareViaWhatsApp(
      'Visit the restaurant: ' + restaurant,
      this.restImages[0],
      null)
  }

} // end
