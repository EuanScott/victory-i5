import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SaleDetailsPageRoutingModule } from './sale-details-routing.module';
import { ComponentsModule } from '../../../shared/components/components.module'

import { SaleListingComponent } from './sale-listing/sale-listing.component'

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
    SaleListingComponent
  ]
})
export class SaleDetailsPageModule { }
