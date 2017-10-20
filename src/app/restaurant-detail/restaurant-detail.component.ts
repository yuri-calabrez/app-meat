import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {RestaurantService} from "../restaurants/restaurant/resturant.service";
import {Restaurant} from "../restaurants/restaurant/restaurant.model";

@Component({
  selector: 'mt-restaurant-detail',
  templateUrl: './restaurant-detail.component.html'
})
export class RestaurantDetailComponent implements OnInit {

  restaurant: Restaurant;
  constructor(private restaurantService: RestaurantService, private route: ActivatedRoute) { }

  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    this.restaurantService.restaurantById(id)
        .subscribe(restaurant => this.restaurant = restaurant);
  }

}
