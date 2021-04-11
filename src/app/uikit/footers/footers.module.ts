import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { IconsModule } from 'angular-bootstrap-md';

@NgModule({
  declarations: [
    FooterComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    IconsModule
  ],
  exports: [
    FooterComponent,
    RouterModule
  ]
})
export class FootersModule { }
