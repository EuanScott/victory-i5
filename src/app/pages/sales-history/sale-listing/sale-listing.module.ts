import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'

import { IonicModule } from '@ionic/angular'

import { SaleListingPageRoutingModule } from './sale-listing-routing.module'
import { ComponentsModule } from '../../../shared/components/components.module'

import { SaleListingPage } from './sale-listing.page'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    SaleListingPageRoutingModule
  ],
  declarations: [
    SaleListingPage
  ]
})
export class SaleListingPageModule { }
