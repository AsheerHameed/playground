import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './cart.component';
import { ShowCartComponent } from './components/show-cart/show-cart.component';
import { HideCartComponent } from './components/hide-cart/hide-cart.component';


@NgModule({
  declarations: [
    CartComponent,
    ShowCartComponent,
    HideCartComponent
  ],
  imports: [
    CommonModule,
    CartRoutingModule
  ]
})
export class CartModule { }
