import { Component, OnInit } from '@angular/core'

import * as Models from '../../models/index'

@Component({
  selector: 'app-header-popover',
  templateUrl: './header-popover.component.html',
  styleUrls: ['./header-popover.component.scss'],
})
export class HeaderPopoverComponent implements OnInit {

  popoverOptions: Models.PopoverHeader[] = [
    { label: 'Get Controller Status', action: 'Status', icon: 'alert-circle-outline' },
    { label: 'Restart Controller', action: 'Restart', icon: 'refresh-outline' },
    { label: 'Refresh Laser Printer', action: 'Refresh', icon: 'sync-outline' },
    { label: 'Test Controller', action: 'Test', icon: 'print-outline' },
    { label: 'Update Fiscal Printer', action: 'Update', icon: 'cloud-upload-outline' },
    { label: 'Drawer Kick', action: 'Drawer', icon: 'cash-outline' },
  ]

  constructor () { }

  ngOnInit () { }

}
