import { Injectable } from '@angular/core'

import * as Models from '../models'
import * as Enums from '../enums'

@Injectable({
  providedIn: 'root'
})
export class SalesService {

  private _salesHistory: Models.SaleHistory[] = []

  constructor () { }

  getSalesHistory (): Models.SaleHistory[] {
    this.salesHistory = []
    this.salesHistory.push({
      sageInvoiceNumber: 'IN000000001',
      victoryInvoiceNumber: 'IN000000001',
      saleReferenceNumber: '991622796587',
      dateCreated: new Date(),
      value: 1000,
      type: Enums.SaleType.sale,
      color: '',
      saleItems: []
    })
    this.salesHistory.push({
      sageInvoiceNumber: '-',
      victoryInvoiceNumber: 'IN000000002',
      saleReferenceNumber: '991622096587',
      dateCreated: new Date(),
      value: 500,
      type: Enums.SaleType.quote,
      color: '',
      saleItems: []
    })

    return this.salesHistory
  }

  getSaleItem (victoryInvoiceNumber: string): Models.SaleHistory {
    const tempSale = this.salesHistory.find(saleItem => saleItem.victoryInvoiceNumber === victoryInvoiceNumber)

    tempSale.saleItems.push({
      name: 'CASTEL BEER 330ML',
      sku: '5053000000CAR101',
      image: 'https://meridian-qa.victorycloudsales.com/media/product-5053000000CAR101-1601036518304.webp',
      price: 405,
      amountStockPurchased: 5,
      amountStockRefundable: 5,
      canCredit: true
    })
    tempSale.saleItems.push({
      name: 'CASTEL BEER 330ML',
      sku: '5053000000CAR101',
      image: 'https://meridian-qa.victorycloudsales.com/media/product-5053000000CAR101-1601036518304.webp',
      price: 405,
      amountStockPurchased: 5,
      amountStockRefundable: 5,
      canCredit: true
    })
    tempSale.saleItems.push({
      name: 'Sprite 300ml',
      sku: '5053000000CAR003',
      image: '',
      price: 205,
      amountStockPurchased: 5,
      amountStockRefundable: 0,
      canCredit: true
    })

    // determine if the sale can be credited or not
    for (let item of tempSale.saleItems) {
      item.canCredit = item.amountStockRefundable > 0
    }

    // If the sale is a quote, don't allow any items to be credited
    if (tempSale.type === Enums.SaleType.quote) {
      for (let item of tempSale.saleItems) {
        item.canCredit = false
      }
    }

    return tempSale
  }

  //#region Accessors

  get salesHistory (): Models.SaleHistory[] {
    return this._salesHistory
  }

  set salesHistory (value: Models.SaleHistory[]) {
    this._salesHistory = value
  }

  //#endregion
}
