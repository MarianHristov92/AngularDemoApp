import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BannersModule} from './banners/banners.module';
import {BarsModule} from './bars/bars.module';
import {FootersModule} from './footers/footers.module';
import {FrameworksModule} from './frameworks/frameworks.module';
import {CardsModule} from './cards/cards.module';

@NgModule({
  imports: [
    CommonModule,
    BannersModule,
    BarsModule,
    CardsModule,
    FootersModule,
    FrameworksModule,
  ],
  exports: [
    BannersModule,
    BarsModule,
    CardsModule,
    FootersModule,
    FrameworksModule,
  ]
})
export class UiModule {}
