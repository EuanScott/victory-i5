import { Component, OnInit } from '@angular/core';

import * as Models from '../../shared/models'

import { BasePage } from '../../base';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage extends BasePage implements OnInit {

  headerData: Models.Header = new Models.Header({
    title: this.appStateService.shopInfo.name
  })

  constructor() {
    super()
   }

  ngOnInit() {
  }

}
