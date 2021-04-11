import {Component, OnInit} from '@angular/core';
import {NavigationBarItem} from './uikit/bars/navigation-bar/navigation-bar-item/navigation-bar-item.model';
import {NavigationBarData} from './uikit/bars/navigation-bar/navigation-data.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'Store Platform';
  navigationBarData: NavigationBarData;

  constructor() {
    this.navigationBarData = new NavigationBarData();
  }

  ngOnInit(): void {
    // fixme: move to old state storage
    this.navigationBarData.logo = new NavigationBarItem('/', '', 'https://mdbootstrap.com/img/logo/mdb-transaprent-noshadows.png');
    this.navigationBarData.rightView.items = [
      new NavigationBarItem('/shop', 'Shop', 'fas fa-shopping-bag'),
      new NavigationBarItem('/sign-in', 'Sign In', 'fas fa-sign-in-alt'),
      new NavigationBarItem('/shop/cart', 'Shopping Cart', 'fas fa-shopping-cart'),
    ];
  }
}
