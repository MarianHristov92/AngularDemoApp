import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { UiModule } from '../uikit/ui.module';
import {ShopPageComponent} from './page/shop-page/shop-page.component';
import { ShoppingCartComponent } from './page/shopping-cart/shopping-cart.component';

@NgModule({
  declarations: [
    ShopPageComponent,
    ShoppingCartComponent,
  ],
  imports: [
    CommonModule,
    MDBBootstrapModule,
    UiModule,
  ]
})
export class ShopPageModule { }
