import { Injectable } from '@angular/core';

import * as Models from '../models/index'

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private _salesKpi: Models.SalesKpi
  private _cashTotals: Models.CashTotals
  private _saleTrends: Models.SaleTrends

  constructor () { }

  //#region Sales KPI

  /**
   * Gets the Sales KPI Data for the Store that the user is currently logged into
   * 
   * @returns SalesKpi
   */
  getSalesKpi (): Models.SalesKpi {
    if (!this._salesKpi) {
      return this._salesKpi = this.setSalesKpi()
    } else {
      return this._salesKpi
    }
  }

  /**
   * Sets the Sales KPI Data from the API to a local object type
   * 
   * TODO: API call still to be made
   * 
   * @returns SalesKpi
   */
  private setSalesKpi (): Models.SalesKpi {
    return new Models.SalesKpi(null)
  }

  /**
   * Returns the Sale Kpi amount for a given field
   * 
   * @param field The KPI field to return the data for
   * 
   * @returns number
   */
  returnSalesKpiAmount (field: string): number {
    return this._salesKpi[field]
  }

  //#endregion

  //#region Cash Totals

  /**
   * Gets the Sales KPI Data for the Store that the user is currently logged into
   * 
   * @returns CashTotals
   */
   getCashTotals (): Models.CashTotals {
    if (!this._cashTotals) {
      return this._cashTotals = this.setCashTotals()
    } else {
      return this._cashTotals
    }
  }

  /**
   * Sets the Sales KPI Data from the API to a local object type
   *
   * TODO: API call still to be made
   * 
   * @returns CashTotals
   */
  private setCashTotals (): Models.CashTotals {
    return new Models.CashTotals(null)
  }

  //#endregion

  //#region Sale Trends

  /**
   * Gets the Sales KPI Data for the Store that the user is currently logged into
   * 
   * @returns SaleTrends
   */
   getSaleTrends (): Models.SaleTrends {
    if (!this._salesKpi) {
      return this._saleTrends = this.setSaleTrends()
    } else {
      return this._saleTrends
    }
  }

  /**
   * Sets the Sales KPI Data from the API to a local object type
   * 
   * TODO: API call still to be made
   * 
   * @returns SalesKpi
   */
  private setSaleTrends (): Models.SaleTrends {
    return new Models.SaleTrends(null)
  }

  //#endregion
}
