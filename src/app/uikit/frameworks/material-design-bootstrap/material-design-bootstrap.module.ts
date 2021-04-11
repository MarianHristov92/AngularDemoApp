import { NgModule } from '@angular/core';
import { BadgeModule } from 'angular-bootstrap-md';
import { BreadcrumbModule } from 'angular-bootstrap-md';
import { ButtonsModule } from 'angular-bootstrap-md';
import { CardsModule } from 'angular-bootstrap-md';
import { CarouselModule } from 'angular-bootstrap-md';
import { ChartsModule } from 'angular-bootstrap-md';
import { CheckboxModule } from 'angular-bootstrap-md';
import { CollapseModule } from 'angular-bootstrap-md';
import { IconsModule } from 'angular-bootstrap-md';
import { DropdownModule } from 'angular-bootstrap-md';
import { InputsModule } from 'angular-bootstrap-md';
import { InputUtilitiesModule } from 'angular-bootstrap-md';
import { ModalModule } from 'angular-bootstrap-md';
import { NavbarModule } from 'angular-bootstrap-md';
import { PopoverModule } from 'angular-bootstrap-md';
import { TableModule } from 'angular-bootstrap-md';
import { TooltipModule } from 'angular-bootstrap-md';
import { WavesModule } from 'angular-bootstrap-md';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

@NgModule({
  declarations: [],
  imports: [
    BadgeModule,
    BreadcrumbModule,
    ButtonsModule,
    CardsModule,
    CarouselModule.forRoot(),
    ChartsModule,
    CheckboxModule,
    CollapseModule.forRoot(),
    DropdownModule.forRoot(),
    IconsModule,
    InputsModule.forRoot(),
    InputUtilitiesModule,
    ModalModule.forRoot(),
    NavbarModule,
    PopoverModule.forRoot(),
    TableModule,
    TooltipModule.forRoot(),
    WavesModule.forRoot(),
    MDBBootstrapModule.forRoot(),
  ]
})
export class MaterialDesignBootstrapModule { }
