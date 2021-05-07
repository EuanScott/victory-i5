export class NoPageData {
  icon?: string
  text: string

  constructor (data) {
    this.icon = data && data.icon ? data.icon : null
    this.text = data && data.text ? data.text : ''
  }
}
