import { AppStateService } from '../services/index'

export class Header {
  title?: string
  showBackButton?: false

  constructor (data, private appStateService?: AppStateService) {
    this.title = data && data.title ? data.title : appStateService.shopInfo.name
    this.showBackButton = data && data.showBackButton ? data.showBackButton : false
  }
}

export interface PopoverHeader {
  label: string
  action: string
  icon: string
}
