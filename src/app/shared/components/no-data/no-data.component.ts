import { Component, Input, OnInit } from '@angular/core'

import * as Models from '../../models'

import { BasePage } from '../../../base'

@Component({
  selector: 'no-data',
  templateUrl: './no-data.component.html',
  styleUrls: ['./no-data.component.scss'],
})
export class NoDataComponent extends BasePage {

  @Input('data') componentData: Models.NoPageData = null

  constructor () {
    super()
  }
}
