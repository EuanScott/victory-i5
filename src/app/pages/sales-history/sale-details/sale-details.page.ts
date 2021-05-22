import { Component, OnInit, ɵallowSanitizationBypassAndThrow } from '@angular/core'

import *  as Models from '../../../shared/models'

import { BasePage } from '../../../base'

@Component({
  selector: 'app-sale-details',
  templateUrl: './sale-details.page.html',
  styleUrls: ['./sale-details.page.scss'],
})
export class SaleDetailsPage extends BasePage implements OnInit {

  private _headerData: Models.Header = new Models.Header({
    title: this.appStateService.branchInfo.name,
    showBackButton: true
  })

  private _saleIdentifiers: Models.SaleIdentifiers

  constructor () {
    super()

    this.activatedRoute.queryParams.subscribe(_p => {
      this.saleIdentifiers = this.router.getCurrentNavigation().extras
    })
  }

  ngOnInit () { }


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

  //#endregion

}
