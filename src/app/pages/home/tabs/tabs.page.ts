import { Component, OnInit } from '@angular/core';
import { Routes } from '@angular/router';

import { BasePage } from 'src/app/base';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage extends BasePage implements OnInit {

  constructor () {
    super()

    console.log('loading tabs')
  }

  ngOnInit () {
  }

}
