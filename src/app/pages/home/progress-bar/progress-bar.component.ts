import { Component, Input } from '@angular/core'

import * as Models from '../../../shared/models'

import { BasePage } from '../../../base'

@Component({
  selector: 'progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss'],
})
export class ProgressBarComponent extends BasePage {

  @Input('data') private _componentData: Models.ProgressBarData

  constructor () {
    super()
  }

  //#region Accessors

  get componentData (): Models.ProgressBarData {
    return this._componentData
  }

  //#endregion

}
