import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LargeBannerComponent} from './large-banner/large-banner.component';
import {SmallBannerComponent} from './small-banner/small-banner.component';



@NgModule({
  declarations: [
    LargeBannerComponent,
    SmallBannerComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LargeBannerComponent,
    SmallBannerComponent,
  ]
})
export class BannersModule { }
