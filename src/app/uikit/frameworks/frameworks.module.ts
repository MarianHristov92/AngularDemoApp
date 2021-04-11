import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MaterialDesignBootstrapModule} from './material-design-bootstrap/material-design-bootstrap.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialDesignBootstrapModule,
  ],
  exports: [
    MaterialDesignBootstrapModule
  ]
})
export class FrameworksModule {}
