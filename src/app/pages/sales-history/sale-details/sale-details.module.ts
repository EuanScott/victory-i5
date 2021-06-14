import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SaleDetailsPageRoutingModule } from './sale-details-routing.module';
import { ComponentsModule } from '../../../shared/components/components.module'

import { SaleArticlesComponent } from './sale-articles/sale-articles.component'

import { SaleDetailsPage } from './sale-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    SaleDetailsPageRoutingModule
  ],
  declarations: [
    SaleDetailsPage,
    SaleArticlesComponent
  ]
})
export class SaleDetailsPageModule { }
