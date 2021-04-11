import { NgModule } from '@angular/core';
import { CardViewComponent } from './card-view/card-view.component';
import { CommonModule } from '@angular/common';
import { CompanyCardViewComponent } from './company-card-view/company-card-view.component';

@NgModule({
  declarations: [
    CardViewComponent,
    CompanyCardViewComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CardViewComponent,
    CompanyCardViewComponent,
  ]
})
export class CardsModule { }
