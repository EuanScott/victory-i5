import { Component, OnInit } from '@angular/core'

import * as Models from '../../shared/models'

import { BasePage } from '../../base'

@Component({
  selector: 'reports',
  templateUrl: './reports.page.html',
  styleUrls: ['./reports.page.scss'],
})
export class ReportsPage extends BasePage implements OnInit {

  private _headerData: Models.Header = new Models.Header({
    title: 'Reports'
  })

  private _reportList: Models.ReportListing[] = []

  constructor () {
    super()
  }

  ngOnInit (): void {
    this.setReportList()
  }

  private setReportList (): void {
    this._reportList.push({
      name: 'All Sales',
      theme: 'primary'
    }, {
      name: 'AIP Sales',
      theme: 'secondary'
    }, {
      name: 'Mukuru Sales',
      theme: 'tertiary'
    }, {
      name: 'None-Synced',
      theme: 'primary'
    }, {
      name: 'Transaction History',
      theme: 'secondary'
    }, {
      name: 'Stock Count',
      theme: 'tertiary'
    })
  }

  openReport (pageName: string): Promise<void> {
    if (!this.appStateService.deviceConnectivity.connected) {
      return this.offlineToastMessage('Report')
    }

    // TODO: Navigate to the respective report page
  }

  //#region Accessors

  get headerData (): Models.Header {
    return this._headerData
  }

  get reportList (): Models.ReportListing[] {
    return this._reportList
  }

  //#endregion
}
