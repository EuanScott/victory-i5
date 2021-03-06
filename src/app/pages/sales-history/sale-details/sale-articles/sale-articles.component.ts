import { Component, Input, OnInit } from '@angular/core'

import *  as Models from '../../../../shared/models'

import { BasePage } from '../../../../base'

@Component({
  selector: 'sale-articles',
  templateUrl: './sale-articles.component.html',
  styleUrls: ['./sale-articles.component.scss'],
})
export class SaleArticlesComponent extends BasePage implements OnInit {

  @Input('data') private _componentData: Models.SaleItem[]

  constructor () {
    super()
  }

  ngOnInit () {
    this.updateComponentData()
  }

  /**
   * Updates the Sales data with placeholders if certain content does not exist on the object
   */
  private updateComponentData (): void {
    if (!this.componentData) {
      setTimeout(_ => this.updateComponentData(), 30)
    } else {
      for (let item of this.componentData) {
        if (!item.image) {
          item.image = '../../../../assets/img/placeholder.svg'
        }
      }
    }
  }

  //#region Accessors

  get componentData (): Models.SaleItem[] {
    return this._componentData
  }

  //#endregion

  //#region Helpers

  /**
   * Returns the class to be assigned to the product based on whether or not the item can be refunded
   * 
   * @param saleItem The item to check against
   * 
   * @returns className
   */
  getProductClass (saleItem): string {
    if (!saleItem.canCredit) return 'disabled'
    if (saleItem.amountStockRefundable === 0) return 'issued'

    return ''
  }

  //#endregion
}
