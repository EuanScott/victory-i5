import { Component, OnInit } from '@angular/core';

import * as Models from '../../../shared/models/index'

import { BasePage } from 'src/app/base';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage extends BasePage implements OnInit {

  headerData: Models.Header = new Models.Header({
    title: this.appStateService.shopInfo.name
  })

  constructor () {
    super()
  }

  ngOnInit () {
  }

}
