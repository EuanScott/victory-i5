import { Component, Input } from '@angular/core'

import * as Models from '../../models'

import { BasePage } from '../../../base'

@Component({
  selector: 'no-data',
  templateUrl: './no-data.component.html',
  styleUrls: ['./no-data.component.scss'],
})
export class NoDataComponent extends BasePage {

  @Input('data') private _componentData: Models.NoPageData = null

  constructor () {
    super()
  }

  //#region Accessors

  get componentData(): Models.NoPageData {
    return this._componentData
  }

  //#endregion
}
