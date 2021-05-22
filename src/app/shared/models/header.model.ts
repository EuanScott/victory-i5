export class Header {
  title: string
  showBackButton?: false

  constructor (data) {
    this.title = data && data.title ? data.title : 'Victory'
    this.showBackButton = data && data.showBackButton ? data.showBackButton : false
  }
}
export interface PopoverHeader {
  label: string
  action: string
  icon: string
}
