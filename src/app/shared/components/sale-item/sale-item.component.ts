import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'

import * as Models from '../../models'
import * as Enums from '../../enums'

import { BasePage } from '../../../base'

@Component({
  selector: 'sale-item',
  templateUrl: './sale-item.component.html',
  styleUrls: ['./sale-item.component.scss'],
})
export class SaleItemComponent extends BasePage implements OnInit {

  @Input('data') private _componentData: Models.SalesSliderData
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

  openSale (sale: Models.SaleHistory): void {
    this.openSaleEvent.emit({ victoryInvoiceNumber: sale.victoryInvoiceNumber, type: sale.type })
  }

  //#region Markup Getters

  get componentData () {
    return this._componentData
  }

  //#endregion
}
