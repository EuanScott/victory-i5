import { Injectable } from '@angular/core';

import * as Models from '../models/index'

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private _salesKpi: Models.SalesKpi

  constructor () { }

  /**
   * Gets the Sales KPI Data for the Store that the user is currently logged into
   * 
   * TODO: API call still to be made
   * 
   * @returns SalesKpi
   */
  getSalesKpi (): Models.SalesKpi {
    if (!this._salesKpi) {
      this._salesKpi = this.setSalesKpi()
    } else {
      return this._salesKpi
    }
  }

  /**
   * Sets the Sales KPI Data from the API to a local object type
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

}
