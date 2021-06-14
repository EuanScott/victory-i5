import { Component, OnInit } from '@angular/core'

import *  as Models from '../../../shared/models'
import * as Enums from '../../../shared/enums'

import { BasePage } from '../../../base'

@Component({
  selector: 'app-sale-details',
  templateUrl: './sale-details.page.html',
  styleUrls: ['./sale-details.page.scss'],
})
export class SaleDetailsPage extends BasePage implements OnInit {

  private _headerData: Models.Header = new Models.Header({
    title: 'Sale Details', //this.appStateService.branchInfo.name,
    showBackButton: true
  })
  private _saleIdentifiers: Models.SaleIdentifiers
  private _saleItem: Models.SaleHistory
  private _articlesToCredit: number

  // TODO: Remove temp variable
  cashInTill: number = 100000

  constructor () {
    super()

    this.saleIdentifiers = this.router.getCurrentNavigation().extras
  }

  ngOnInit () {
    this.getPageData()
    this._headerData.title = this.saleIdentifiers.victoryInvoiceNumber
  }

  private getPageData (): void {
    this.saleItem = this.salesService.getSaleItem(this.saleIdentifiers.victoryInvoiceNumber)

    this.articlesToCredit = 0

    for (let item of this.saleItem.saleItems) {
      if (item.canCredit) this.articlesToCredit += 1
    }
  }

  //#region Accessors

  get headerData (): Models.Header {
    return this._headerData
  }

  get saleIdentifiers (): Models.SaleIdentifiers | any {
    return this._saleIdentifiers
  }

  set saleIdentifiers (value: Models.SaleIdentifiers | any) {
    this._saleIdentifiers = value
  }

  get articlesToCredit (): number {
    return this._articlesToCredit
  }

  set articlesToCredit (value: number) {
    this._articlesToCredit = value
  }

  get saleItem (): Models.SaleHistory {
    return this._saleItem
  }

  set saleItem (value: Models.SaleHistory) {
    this._saleItem = value
  }

  //#endregion

  //#region Helpers

  isButtonDisabled (): boolean {
    return this.saleItem.type === Enums.SaleType.quote
  }

  //#endregion

}
