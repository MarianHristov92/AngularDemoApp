import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomePageCarouselComponent} from './components/home-page-carousel/home-page-carousel.component';
import {HomePageFeatureListComponent} from './components/home-page-feature-list/home-page-feature-list.component';
import {HomePageComponent} from './page/home-page/home-page.component';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import { HomePageCarouselItemComponent } from './components/home-page-carousel/components/home-page-carousel-item/home-page-carousel-item.component';
import { HomePageFeatureListItemComponent } from './components/home-page-feature-list/components/home-page-feature-list-item/home-page-feature-list-item.component';
import { HomePageCompanyListComponent } from './components/home-page-company-list/home-page-company-list.component';
import {UiModule} from '../uikit/ui.module';

@NgModule({
  declarations: [
    HomePageCarouselComponent,
    HomePageCarouselItemComponent,
    HomePageFeatureListComponent,
    HomePageComponent,
    HomePageFeatureListItemComponent,
    HomePageCompanyListComponent
  ],
  imports: [
    CommonModule,
    MDBBootstrapModule,
    UiModule
  ]
})
export class HomePageModule { }
