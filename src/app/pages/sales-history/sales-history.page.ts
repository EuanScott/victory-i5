import { Component, OnInit, ViewChild } from '@angular/core'

import * as Models from '../../shared/models'
import * as Enums from '../../shared/enums'

import { BasePage } from '../../base'
import { IonContent } from '@ionic/angular'
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

  @ViewChild(IonContent, { static: false }) content: IonContent;

  constructor () {
    super()


    for (let i = 0; i < 100; i++) {
      this.items.push({
        name: 'one'
      })
    }
  }

  ngOnInit () { }


  //#region Accessors

  get headerData (): Models.Header {
    return this._headerData
  }

  //#endregion

  //#region Helpers

  /**
   * Scrolls the user to the top of the page
   */
   scrollToTop () {
    this.content.scrollToTop(1500)
  }

  //#endregion
}
