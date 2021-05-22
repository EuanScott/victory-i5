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

  private _headerData: Models.Header = new Models.Header({
    title: this.appStateService.branchInfo.name
  })
  private _noPageData: Models.NoPageData = new Models.NoPageData({
    icon: 'storefront-outline',
    text: 'You have made no sales.'
  })

  @ViewChild(IonContent) content: IonContent

  constructor () {
    super()
  }

  ngOnInit () {
    this.salesService.getSalesHistory()
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

  //#endregion
}
