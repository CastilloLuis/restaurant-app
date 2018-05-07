import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { AddRestaurantPage } from '../add-restaurant/add-restaurant';
import { Restaurant } from '../../class/restaurant';
import { RestaurantService } from '../../services/restaurant.service';

/* PAGES */
import { ViewRestaurantPage } from '../view-restaurant/view-restaurant';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
}) 
export class HomePage {

  addRestaurant = AddRestaurantPage;
  restaurants: Restaurant[] = [];
  
  constructor(public navCtrl: NavController, public restServices: RestaurantService, public modalCtrl: ModalController) {

  }
 
  ionViewWillEnter(){
    this.restaurants = this.restServices.loadRestaurant();
    //alert(JSON.stringify(this.restaurants));
  }

  showRestaurant(restaurant: Object){
    let mytoast = this.modalCtrl.create(ViewRestaurantPage, restaurant);
    mytoast.present();
  }

} // end
