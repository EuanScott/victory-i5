import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'

import * as Models from '../../../../shared/models'
import * as Enums from '../../../../shared/enums'

import { BasePage } from '../../../../base'

@Component({
  selector: 'sale-information',
  templateUrl: './sale-information.component.html',
  styleUrls: ['./sale-information.component.scss'],
})
export class SaleInformationComponent extends BasePage implements OnInit {

  @Input('data') private _componentData: Models.SaleHistory[]
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

  get componentData (): Models.SaleHistory[] {
    return this._componentData
  }

  //#endregion
}
