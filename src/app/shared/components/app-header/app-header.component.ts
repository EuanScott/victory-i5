import { Component, Input, OnInit } from '@angular/core'

import { HeaderPopoverComponent } from '../header-popover/header-popover.component'
import * as Models from '../../models/index'

import { BasePage } from '../../../base'

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss'],
})
export class AppHeaderComponent extends BasePage implements OnInit {

  @Input('data') headerData: Models.Header

  constructor () {
    super()

    setTimeout(() => {
      console.log(this.headerData)
    }, 1000);
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
