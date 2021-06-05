import { Component, Input } from '@angular/core'

import * as Models from '../../../shared/models'

import { BasePage } from '../../../base'

@Component({
  selector: 'sales-data',
  templateUrl: './sales-data.component.html',
  styleUrls: ['./sales-data.component.scss'],
})
export class SalesDataComponent extends BasePage {

  @Input('data') private _componentData: Models.SalesSliderData

  slideOptions = {
    slidesPerView: 2.2,
  }

  constructor () {
    super()
  }

  //#region Markup Getters

  get componentData (): Models.SalesSliderData {
    return this._componentData
  }

  //#endregion
}
