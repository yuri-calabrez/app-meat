import { Component, OnInit } from '@angular/core';
import {RestaurantService} from "../../restaurants/restaurant/resturant.service";
import {Observable} from "rxjs/Observable";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'mt-reviews',
  templateUrl: './reviews.component.html'
})
export class ReviewsComponent implements OnInit {

  reviews: Observable<any>

  constructor(private restaurantService: RestaurantService, private router: ActivatedRoute) { }

  ngOnInit() {
    let id = this.router.parent.snapshot.params['id'];
    this.reviews = this.restaurantService.reviewsOfRestaurant(id);
  }

}
