import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { UiModule } from '../uikit/ui.module';
import { LoginPageComponent } from './page/login-page/login-page.component';

@NgModule({
  declarations: [
    LoginPageComponent,
  ],
  imports: [
    CommonModule,
    MDBBootstrapModule,
    UiModule
  ]
})
export class AccountModule { }
