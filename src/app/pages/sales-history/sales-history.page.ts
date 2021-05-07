import { Component, OnInit } from '@angular/core'

import * as Models from '../../shared/models'
import * as Enums from '../../shared/enums'

import { BasePage } from '../../base'
@Component({
  selector: 'sales-history',
  templateUrl: './sales-history.page.html',
  styleUrls: ['./sales-history.page.scss'],
})
export class SalesHistoryPage extends BasePage implements OnInit {

  private _headerData: Models.Header = new Models.Header({
    title: this.appStateService.branchInfo.name
  })

  pageMessage: Models.NoPageData = new Models.NoPageData({
    icon: 'storefront-outline',
    text: 'You have made no sales.'
  })

  items: any[] = [];

  constructor () {
    super()


    for (let i = 0; i < 100; i++) {
      this.items.push({
        name: 'one'
      })
    }
  }

  ngOnInit () { }


  //#region MAccessors

  get headerData (): Models.Header {
    return this._headerData
  }

  //#endregion
}
