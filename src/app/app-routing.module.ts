import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/page/home-page/home-page.component';
import { ShopPageComponent } from './shop/page/shop-page/shop-page.component';
import { ShoppingCartComponent } from './shop/page/shopping-cart/shopping-cart.component';
import { LoginPageComponent } from './account/page/login-page/login-page.component';

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'shop', children: [
      {path: '', component: ShopPageComponent},
      {path: 'cart', component: ShoppingCartComponent},
    ]
  },
  {path: 'sign-in', children: [
      {path: '', component: LoginPageComponent},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
