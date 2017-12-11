import {NgModule, ModuleWithProviders} from "@angular/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {InputComponent} from "./input/input.component";
import {RadioComponent} from "./radio/radio.component";
import {RatingComponent} from "./rating/rating.component";

import {OrderService} from "../order/order.service";
import {ShoppingCartService} from "../restaurant-detail/shopping-cart/shopping-cart.service";
import {RestaurantService} from "../restaurants/restaurant/resturant.service";
import { SnackbarComponent } from './messages/snackbar/snackbar.component';

import {NotificationService} from './messages/notification.service';
import {LoginService} from '../security/login/login.service';
import {LoggedInGuard} from '../security/loggedin.guard';
import {LeaveOrderGuard} from '../order/leave-order.guard';

@NgModule({
    declarations: [InputComponent, RadioComponent, RatingComponent, SnackbarComponent],
    imports: [FormsModule, ReactiveFormsModule, CommonModule],
    exports: [
    FormsModule, ReactiveFormsModule, CommonModule,
    InputComponent, RadioComponent, RatingComponent, SnackbarComponent
    ]
})
export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [
            OrderService, 
            ShoppingCartService, 
            RestaurantService, 
            NotificationService,
            LoginService,
            LoggedInGuard,
            LeaveOrderGuard
            ]
        }
    }
}
