import { Component, OnInit, ViewChild } from '@angular/core'
import { IonContent } from '@ionic/angular'

import * as Models from '../../../shared/models'
import * as Enums from '../../../shared/enums'

import { BasePage } from '../../../base'

@Component({
  selector: 'sale-listing',
  templateUrl: './sale-listing.page.html',
  styleUrls: ['./sale-listing.page.scss'],
})
export class SaleListingPage extends BasePage implements OnInit {

  @ViewChild(IonContent) content: IonContent

  private _headerData: Models.Header = new Models.Header({
    title: this.appStateService.branchInfo.name
  })
  private _noPageData: Models.NoPageData = new Models.NoPageData({
    icon: 'storefront-outline',
    text: 'You have made no sales.'
  })
  private _salesToDisplay: Models.SaleHistory[]

  constructor () {
    super()
  }

  ngOnInit () {
    this.salesService.getSalesHistory()
    this.setSalesToDisplay('sale')
  }

  /**
   * Sets the Sales that are to be displayed on the page
   * 
   * @param saleType The sale type to be displayed on the page
   */
  private setSalesToDisplay (saleType: string): void {
    this.salesToDisplay = this.salesService.salesHistory.filter(item => item.type === saleType)
  }

  goToSaleDetails (saleIdentifiers: Models.SaleIdentifiers | any): void {
    this.router.navigate(['sale-details'], saleIdentifiers)
  }

  segmentChanged (ev: any): void {
    this.setSalesToDisplay(ev.detail.value)
  }

  //#region Accessors

  get headerData (): Models.Header {
    return this._headerData
  }

  get noPageData (): Models.NoPageData {
    return this._noPageData
  }

  get salesToDisplay (): Models.SaleHistory[] {
    return this._salesToDisplay
  }

  set salesToDisplay (value: Models.SaleHistory[]) {
    this._salesToDisplay = value
  }

  //#endregion
}
