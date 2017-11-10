import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormControl} from "@angular/forms";
import {Restaurant} from './restaurant/restaurant.model';
import {RestaurantService} from "./restaurant/resturant.service";
import {trigger, state, style, transition, animate} from '@angular/animations';
import "rxjs/add/operator/switchMap";

@Component({
    selector: 'mt-restaurants',
    templateUrl: './restaurants.component.html',
    animations: [
        trigger('toogleSearch', [
            state('hidden', style({
                opacity: 0,
                "max-height": "0px"
            })),
            state('visible', style({
                opacity: 1,
                "max-height": "70px",
                "margin-top": "20px"
            })),
            transition("* => *", animate('250ms 0s ease-in-out'))
        ])
    ]
})
export class RestaurantsComponent implements OnInit {

    searchBarState = 'hidden';
    restaurants: Restaurant[];

    searchForm: FormGroup;
    searchControl: FormControl;

    constructor(private restaurantService: RestaurantService, private formBuilder: FormBuilder) {
    }

    ngOnInit() {
        this.searchControl = this.formBuilder.control('');
        this.searchForm = this.formBuilder.group({
            searchControl: this.searchControl
        });
        this.searchControl.valueChanges
            .switchMap(searchTerm => this.restaurantService.restaurants(searchTerm))
            .subscribe(restaurants => this.restaurants = restaurants);

        this.restaurantService.restaurants()
            .subscribe(restaurants => this.restaurants = restaurants);
    }

    toogleSearch() {
        this.searchBarState = this.searchBarState === 'hidden' ? 'visible' : 'hidden';
    }

}
