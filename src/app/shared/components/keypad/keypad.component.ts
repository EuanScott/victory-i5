import { Component, OnInit } from '@angular/core'

import { BasePage } from '../../../base'

interface Key {
  color: string
  text: string
  icon: string
  class: string
}

@Component({
  selector: 'keypad',
  templateUrl: './keypad.component.html',
  styleUrls: ['./keypad.component.scss'],
})
export class KeypadComponent extends BasePage implements OnInit {

  private _pinCode: string[] = []

  keys: Key[] = [
    { color: 'white', text: '1', icon: null, class: '' },
    { color: 'white', text: '2', icon: null, class: '' },
    { color: 'white', text: '3', icon: null, class: '' },
    { color: 'white', text: '4', icon: null, class: '' },
    { color: 'white', text: '5', icon: null, class: '' },
    { color: 'white', text: '6', icon: null, class: '' },
    { color: 'white', text: '7', icon: null, class: '' },
    { color: 'white', text: '8', icon: null, class: '' },
    { color: 'white', text: '9', icon: null, class: '' },
    { color: 'danger', text: null, icon: 'arrow-back', class: 'delete' },
    { color: 'white', text: '0', icon: null, class: '' },
    { color: 'primary', text: null, icon: 'refresh', class: 'reset' },
  ]

  constructor () {
    super()
  }

  ngOnInit () { }

  /**
   * Updates the _pinCode with the selected key
   * 
   * @param key The key that the user selected
   */
  keyPress (key: Key): void {
    if (key.text && this._pinCode.length < 4) {
      this._pinCode.push(key.text)
    }

    if (key.icon === 'arrow-back') {
      this._pinCode.pop()
    }

    if (key.icon === 'refresh') {
      this._pinCode.length = 0
    }

    if (this._pinCode.length === 4) {

      this.loaderService.presentLoader('login')
      setTimeout(() => {
        this.router.navigate(['/home'])
      }, 1000);
    }
  }

  get pinCode (): string[] {
    return this._pinCode
  }

}
