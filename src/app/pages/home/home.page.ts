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
  private _saleTrends: Models.SaleTrends = null

  constructor () {
    super()
  }

  ngOnInit () {
    this.initializeSalesKpi()
    this.initializeCashTotals()
    this.initializeSaleTrends()
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

    // Sets the amount for each data card
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
      target: this.appStateService.branchConfig.config.cashManagement.maxAmountInTill,
      color: 'primary'
    }))
    this._progressBarData.push(new Models.ProgressBarData({
      title: 'Cash In Safe',
      progress: this.dashboardService.getCashTotals().cashInSafe,
      target: this.appStateService.branchConfig.config.cashManagement.maxAmountInSafe,
      color: 'secondary'
    }))
  }

  /**
   * Initializes the Sale Trends graph data to be displayed on the page
   */
  private initializeSaleTrends () {
    this.dashboardService.getSaleTrends()

    this._saleTrends = {
      "days": [
        {
          total: 0,
          date: "2021-03-11"
        },
        {
          total: 0,
          date: "2021-03-12"
        },
        {
          total: 0,
          date: "2021-03-13"
        },
        {
          total: 0,
          date: "2021-03-14"
        },
        {
          total: 0,
          date: "2021-03-15"
        },
        {
          total: 0,
          date: "2021-03-16"
        },
        {
          total: 0,
          date: "2021-03-17"
        }
      ],
      "weeks": [
        {
          total: 0,
          date: "2021-02-01"
        },
        {
          total: 0,
          date: "2021-02-08"
        },
        {
          total: 0,
          date: "2021-02-15"
        },
        {
          total: 0,
          date: "2021-02-22"
        },
        {
          total: 0,
          date: "2021-03-01"
        },
        {
          total: 0,
          date: "2021-03-08"
        },
        {
          total: 0,
          date: "2021-03-15"
        }
      ],
      "months": [
        {
          total: 21500,
          date: "2020-08-01"
        },
        {
          total: 20500,
          date: "2020-09-01"
        },
        {
          total: 0,
          date: "2020-10-01"
        },
        {
          total: 645,
          date: "2020-11-01"
        },
        {
          total: 0,
          date: "2020-12-01"
        },
        {
          total: 0,
          date: "2021-01-01"
        },
        {
          total: 0,
          date: "2021-02-01"
        },
        {
          total: 0,
          date: "2021-03-01"
        }
      ]
    }
  }

  //#region Markup Getters

  get headerData (): Models.Header {
    return this._headerData
  }

  get salesData (): Models.SalesSliderData[] {
    return this._salesData
  }

  get saleTrendsData (): Models.SaleTrends {
    return this._saleTrends
  }

  get progressBarData (): Models.ProgressBarData[] {
    return this._progressBarData
  }


  //#endregion

}
