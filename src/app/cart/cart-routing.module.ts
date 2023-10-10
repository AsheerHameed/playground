import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart.component';
import { ShowCartComponent } from './components/show-cart/show-cart.component';
import { HideCartComponent } from './components/hide-cart/hide-cart.component';

const routes: Routes = [
  {
    path: 'cart',
    children: [
      { path: '', component: CartComponent },
      { path: 'show', component: ShowCartComponent },
      {path:'hide',component:HideCartComponent}
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CartRoutingModule {}
