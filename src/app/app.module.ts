import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomePageModule} from './home-page/home-page.module';
import {UiModule} from './uikit/ui.module';
import {AccountModule} from './account/account.module';
import {ShopPageModule} from './shop/shop-page.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomePageModule,
    UiModule,
    AccountModule,
    ShopPageModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
