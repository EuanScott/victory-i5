import { Component, OnInit, ViewChild } from '@angular/core'
import { IonSlides } from '@ionic/angular'

import * as Models from '../../../shared/models'
import * as Enums from '../../../shared/enums'

import { BasePage } from '../../../base'

@Component({
  selector: 'sale-history',
  templateUrl: './sale-history.page.html',
  styleUrls: ['./sale-history.page.scss'],
})
export class SaleHistoryPage extends BasePage implements OnInit {

  @ViewChild('slides') slides: IonSlides;

  private _headerData: Models.Header = new Models.Header({
    title: 'Sales History' //this.appStateService.branchInfo.name
  })
  private _noPageData: Models.NoPageData = new Models.NoPageData({
    icon: 'storefront-outline',
    text: 'You have made no sales.'
  })
  private _sales: Models.SaleHistory[]
  private _quotes: Models.SaleHistory[]

  slideOpts: any = {
    allowTouchMove: false
  }

  constructor () {
    super()
  }

  ngOnInit () {
    this.salesService.getSalesHistory()
    this.setSalesToDisplay()
  }

  /**
   * Sets the Sales that are to be displayed on the page
   */
  private setSalesToDisplay (): void {
    this.sales = this.salesService.salesHistory.filter(item => item.type === Enums.SaleType.sale)
    this.quotes = this.salesService.salesHistory.filter(item => item.type === Enums.SaleType.quote)
  }

  segmentChanged (event: any): void {
    if (event.detail.value === 'sale') {
      this.slides.slidePrev()
    } else {
      this.slides.slideNext()
    }
  }

  goToSaleDetails (saleIdentifiers: Models.SaleIdentifiers | any): void {
    this.router.navigate(['sale-details'], saleIdentifiers)
  }

  //#region Accessors

  get headerData (): Models.Header {
    return this._headerData
  }

  get noPageData (): Models.NoPageData {
    return this._noPageData
  }

  get sales (): Models.SaleHistory[] {
    return this._sales
  }

  set sales (value: Models.SaleHistory[]) {
    this._sales = value
  }

  get quotes (): Models.SaleHistory[] {
    return this._quotes
  }

  set quotes (value: Models.SaleHistory[]) {
    this._quotes = value
  }

  //#endregion

}
