import { Component, OnInit } from '@angular/core';

import * as Models from '../../shared/models'

import { BasePage } from '../../base';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage extends BasePage implements OnInit {

  private _headerData: Models.Header = new Models.Header({
    title: this.appStateService.shopInfo.name
  })

  private _salesData: Models.SalesSliderData[] = []

  constructor () {
    super()
  }

  ngOnInit () {
    this.initializeSalesKpi()
  }

  /**
   * 
   */
  private initializeSalesKpi () {
    this.dashboardService.getSalesKpi()

    // TODO: See about using the SalesSliderData model class
    this._salesData = [
      {
        title: 'Sales for the day',
        name: 'totalSalesForDay',
        amount: 0,
        subtitle: 'MWK',
        color: 'primary'
      }, {
        title: 'Sales for the week',
        name: 'totalSalesForWeek',
        amount: 0,
        subtitle: 'MWK',
        color: 'secondary'
      }, {
        title: 'Sales for the month',
        name: 'totalSalesForMonth',
        amount: 0,
        subtitle: 'MWK',
        color: 'tertiary'
      }, {
        title: 'Sales Transactions',
        name: 'totalTransactionsForDay',
        amount: 0,
        subtitle: 'Daily Count',
        color: 'primary'
      }
    ]

    for (const dataEntry of this._salesData) {
      dataEntry.amount = this.dashboardService.returnSalesKpiAmount(dataEntry.name)
    }
  }

  //#region Markup Getters

  get headerData() : Models.Header {
    return this._headerData
  }

  get salesData (): Models.SalesSliderData[] {
    return this._salesData
  }

  //#endregion

}
