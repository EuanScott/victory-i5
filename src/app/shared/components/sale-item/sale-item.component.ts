import { Component, EventEmitter, OnInit, Output } from '@angular/core'

import * as Models from '../../models'
import * as Enums from '../../enums'

import { BasePage } from '../../../base'

@Component({
  selector: 'sale-item',
  templateUrl: './sale-item.component.html',
  styleUrls: ['./sale-item.component.scss'],
})
export class SaleItemComponent extends BasePage implements OnInit {

  @Output() openSaleEvent = new EventEmitter()

  constructor () {
    super()
  }

  ngOnInit () {
    // Set the button text color
    this.salesService.salesHistory.forEach(item => {
      item.color = item.type === Enums.SaleType.sale ? 'primary' : 'secondary'
    })
  }

  openSale(sale: Models.SaleData): void {
    this.openSaleEvent.emit({sageInvoiceNumber: sale.sageInvoiceNumber, type: sale.type})
  }
}
