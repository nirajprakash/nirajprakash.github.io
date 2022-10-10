import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

import { MatSliderModule } from '@angular/material/slider';
import {  MatButtonModule } from '@angular/material/button';
import { SharedModule } from '../../@shared/shared.module';
import { HomeTopComponent } from './home-top/home-top.component';
import { HomeAboutComponent } from './home-about/home-about.component';
import { FooterModule } from '../../common/footer/footer.module';
import { HomePlatformsComponent } from './home-platforms/home-platforms.component';

@NgModule({
  declarations: [
    HomeComponent,
    HomeTopComponent,
    HomeAboutComponent,
    HomePlatformsComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    MatButtonModule,
    FooterModule
    
  ]
})
export class HomeModule { }
