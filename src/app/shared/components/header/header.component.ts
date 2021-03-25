import { Component, Input, OnInit } from '@angular/core'

import { HeaderPopoverComponent } from '../header-popover/header-popover.component'
import * as Models from '../../models/index'

import { BasePage } from '../../../base'

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent extends BasePage implements OnInit {

  @Input('data') headerData: Models.Header

  constructor () {
    super()
  }

  ngOnInit () { }

  /**
   * Opens a popover to display a list of options for the controller/printer
   *
   * @param event Ensures that the popover is displayed over the button and not anywhere else
   */
  async presentPopover (event: any) {
    const popover = await this.popoverController.create({
      component: HeaderPopoverComponent,
      cssClass: 'header__popover',
      event,
      translucent: true
    });
    return await popover.present();
  }

}
