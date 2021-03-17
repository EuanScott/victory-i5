import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';
import { ComponentsModule } from '../../shared/components/components.module';

import { SalesDataComponent } from './sales-data/sales-data.component'
import { ProgressBarComponent } from './progress-bar/progress-bar.component'

import { HomePage } from './home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    HomePageRoutingModule
  ],
  declarations: [
    HomePage,
    SalesDataComponent,
    ProgressBarComponent
  ]
})
export class HomePageModule { }
