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
    title: this.appStateService.branchInfo.name
  })

  private _salesData: Models.SalesSliderData[] = []
  private _progressBarData: Models.ProgressBarData[] = []

  constructor () {
    super()
  }

  ngOnInit () {
    this.initializeSalesKpi()
    this.initializeCashTotals()
  }

  /**
   * Initializes the Sales KPI data to be displayed on the page
   */
  private initializeSalesKpi () {
    this.dashboardService.getSalesKpi()

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

  /**
   * Initializes the Cash Totals data to be displayed on the page
   */
  private initializeCashTotals () {
    this._progressBarData.push(new Models.ProgressBarData({
      title: 'Cash In Till',
      progress: this.dashboardService.getCashTotals().cashInTill,
      target: this.appStateService.branchConfig.config.cashManagement.maxAmountInTill
    }))
    this._progressBarData.push(new Models.ProgressBarData({
      title: 'Cash In Safe',
      progress: this.dashboardService.getCashTotals().cashInSafe,
      target: this.appStateService.branchConfig.config.cashManagement.maxAmountInSafe
    }))
  }

  //#region Markup Getters

  get headerData (): Models.Header {
    return this._headerData
  }

  get salesData (): Models.SalesSliderData[] {
    return this._salesData
  }
  
  get progressBarData() : Models.ProgressBarData[] {
    return this._progressBarData
  }
  
  //#endregion

}
