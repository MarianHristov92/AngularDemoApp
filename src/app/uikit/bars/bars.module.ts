import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { RouterModule } from '@angular/router';
import { NavbarModule } from 'angular-bootstrap-md';
import { DropdownModule } from 'angular-bootstrap-md';
import { QuickLinksComponent } from './quick-links/quick-links.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import {NavigationBarItemComponent} from './navigation-bar/navigation-bar-item/navigation-bar-item.component';
import {NavigationBarViewComponent} from './navigation-bar/navigation-bar-view/navigation-bar-view.component';

@NgModule({
  declarations: [
    NavigationBarComponent,
    NavigationBarItemComponent,
    NavigationBarViewComponent,
    QuickLinksComponent,
    SearchBarComponent,
  ],
  imports: [
      CommonModule,
      RouterModule,
      NavbarModule,
      DropdownModule
  ],
  exports: [
    NavigationBarComponent,
    NavigationBarItemComponent,
    NavigationBarViewComponent,
    NavbarModule,
    DropdownModule,
    RouterModule,
    SearchBarComponent,
    QuickLinksComponent,
  ]
})
export class BarsModule { }
