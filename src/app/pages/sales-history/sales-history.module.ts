import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'

import { IonicModule } from '@ionic/angular'

import { SalesHistoryPageRoutingModule } from './sales-history-routing.module'
import { ComponentsModule } from '../../shared/components/components.module'

import { SalesHistoryPage } from './sales-history.page'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    SalesHistoryPageRoutingModule
  ],
  declarations: [SalesHistoryPage]
})
export class SalesHistoryPageModule {}
