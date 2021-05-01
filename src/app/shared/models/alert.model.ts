export class AlertParams {
  header: string
  message: string
  buttons: AlertButton[]

  constructor (data) {
    this.header = data ? data.header : 'Header'
    this.message = data ? data.message : 'Message <strong>text</strong>!!!'
    this.buttons = data ? data.buttons.map(element => new AlertButton(element)) : [new AlertButton(null)]
  }
}

export class AlertButton {
  text: string
  role: string

  constructor (data) {
    this.text = data ? data.text : 'Okay'
    this.role = data ? data.role : 'cancel'
  }
}
