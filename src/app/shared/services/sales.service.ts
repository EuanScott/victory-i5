import { Injectable } from '@angular/core'

import * as Models from '../models/sales.model'
import * as Enums from '../../shared/enums'

@Injectable({
  providedIn: 'root'
})
export class SalesService {

  private _salesHistory: Models.SaleData[] = []

  constructor () { }

  getSalesHistory (): void {
    this._salesHistory = []
    this._salesHistory.push({
      sageInvoiceNumber: 'IN000000001',
      victoryInvoiceNumber: 'IN000000001',
      dateCreated: new Date(),
      value: 1000,
      type: Enums.SaleType.sale,
      color: ''
    })
    this._salesHistory.push({
      sageInvoiceNumber: '-',
      victoryInvoiceNumber: 'IN000000002',
      dateCreated: new Date(),
      value: 500,
      type: Enums.SaleType.quote,
      color: ''
    })
  }

  get salesHistory (): Models.SaleData[] {
    return this._salesHistory
  }

  set salesHistory (value: Models.SaleData[]) {
    this._salesHistory = value
  }
}
