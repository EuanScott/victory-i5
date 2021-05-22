import { Component, OnInit } from '@angular/core'

import { BasePage } from '../../base'
@Component({
  selector: 'login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage extends BasePage implements OnInit {

  private _areaCodes: string[] = ['+265', '+27']
  private _selectedAreaCode: string = null

  constructor () {
    super()
  }

  ngOnInit () {
    this._selectedAreaCode = this._areaCodes[0]
  }

  /**
   * Updates the selectedAreaCode variable
   * 
   * @param code The event value
   */
  updateAreaCode (code) {
    this._selectedAreaCode = code.detail.value
  }

  //#region Markup Getters

  get areaCodes (): string[] {
    return this._areaCodes
  }

  get selectedAreaCode (): string {
    return this._selectedAreaCode
  }

  //#endregion
}
