import  * as Enums from '../enums'

export class ToastOptions {
  header?: string
  type: Enums.ToastType
  position: Enums.ToastPosition
  duration: number
  button: ToastButton

  constructor (data) {
    this.header = data ? data.header : null
    this.type = data ? data.type : Enums.ToastType.success
    this.position = data ? data.position : Enums.ToastPosition.top
    this.duration = data ? data.duration : 3000
    this.button = data ? new ToastButton(data.button) : new ToastButton(null)
  }
}

export class ToastButton {
  side?: Enums.ToastButtonSide
  icon?: string
  text?: string
  role?: string

  constructor (data) {
    this.side = data ? data.side : Enums.ToastButtonSide.end
    this.icon = data ? data.icon : 'trash-outline'
    this.text = data ? data.text : null
    this.role = data ? data.role : 'cancel'
  }
}
