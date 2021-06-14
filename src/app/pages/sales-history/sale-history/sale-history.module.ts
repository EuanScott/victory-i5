import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'

import { IonicModule } from '@ionic/angular'

import { SaleHistoryPageRoutingModule } from './sale-history-routing.module'
import { ComponentsModule } from '../../../shared/components/components.module'

import { SaleInformationComponent } from './sale-information/sale-information.component'

import { SaleHistoryPage } from './sale-history.page'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    SaleHistoryPageRoutingModule
  ],
  declarations: [
    SaleHistoryPage,
    SaleInformationComponent
  ]
})
export class SaleHistoryPageModule { }
