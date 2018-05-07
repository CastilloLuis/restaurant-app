import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

@IonicPage()
@Component({
  selector: 'page-view-restaurant',
  templateUrl: 'view-restaurant.html',
  providers: [Geolocation]
})
export class ViewRestaurantPage {

  restName: string = '';
  restImages: string[] = [];
  restRating: any = ''; 
  restLocation: Object;
  restLat: number = null;
  restLong: number = null;
  constructor(public navCtrl: NavController, public navParams: NavParams, public geolocation: Geolocation) {
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
  
  drawRating(rating: number) { 
    for(let i=0; i<rating; i++){
      this.restRating += ' ⭐ ';
    }
  }
}
