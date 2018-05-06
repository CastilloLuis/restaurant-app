import { Injectable } from "@angular/core";
import { Restaurant } from '../class/restaurant';

@Injectable()
export class RestaurantService {

    restaurants: Restaurant[] = [];

    addRestaurant(name: string, images: string[], rating: number, location: {lat: number, long: number}) {
        let restaurant = new Restaurant(name, images, rating, location);
        this.restaurants.push(restaurant);
        console.log(restaurant.name,restaurant.images.length,restaurant.rating,restaurant.location);
    }

    loadRestaurant() {
        //alert(this.restaurants);
        return this.restaurants.slice(); // return a copy
    }

}