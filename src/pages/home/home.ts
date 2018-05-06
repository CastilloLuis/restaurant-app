import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AddRestaurantPage } from '../add-restaurant/add-restaurant';
import { Restaurant } from '../../class/restaurant';
import { RestaurantService } from '../../services/restaurant.service';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
}) 
export class HomePage {

  addRestaurant = AddRestaurantPage;
  restaurants: Restaurant[] = [];
  
  constructor(public navCtrl: NavController, public restServices: RestaurantService) {

  }
 
  ionViewWillEnter(){
    this.restaurants = this.restServices.loadRestaurant();
    //alert(JSON.stringify(this.restaurants));
  }

} // end
