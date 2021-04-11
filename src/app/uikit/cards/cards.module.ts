import { NgModule } from '@angular/core';
import { CardViewComponent } from './card-view/card-view.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    CardViewComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CardViewComponent,
  ]
})
export class CardsModule { }
