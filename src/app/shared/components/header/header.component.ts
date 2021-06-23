import { Component, Input, OnInit } from '@angular/core'

import * as Models from '../../models/index'
import { HeaderPopoverComponent } from '../header-popover/header-popover.component'

import { BasePage } from '../../../base'

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent extends BasePage implements OnInit {

  @Input('data') private _componentData: Models.Header

  constructor () {
    super()
  }

  ngOnInit () {
    this.updateComponentData()
  }

  /**
   * Updates the Header data with placeholders if certain content does not exist on the object
   */
  private updateComponentData (): void {
    if (!this.componentData) {
      setTimeout(_ => this.updateComponentData(), 30)
    } else {
      if (!this.componentData.title) {
        this.componentData.title = this.appStateService.branchInfo.name
      }
    }
  }

  goBack (): void {
    this.navController.back()
  }

  /**
   * Opens a popover to display a list of options for the controller/printer
   *
   * @param event Ensures that the popover is displayed over the button and not anywhere else
   */
  async presentPopover (event: any): Promise<void> {
    const popover = await this.popoverController.create({
      component: HeaderPopoverComponent,
      cssClass: 'header__popover',
      event,
      translucent: true
    })

    return await popover.present()
  }

  //#region Accessors

  get componentData (): Models.Header {
    return this._componentData
  }

  //#endregion
}
