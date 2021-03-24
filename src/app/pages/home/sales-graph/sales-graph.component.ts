import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core'

import * as Models from '../../../shared/models'

import { Chart } from 'chart.js'

import { BasePage } from '../../../base'

@Component({
  selector: 'sales-graph',
  templateUrl: './sales-graph.component.html',
  styleUrls: ['./sales-graph.component.scss'],
})
export class SalesGraphComponent extends BasePage implements OnInit {

  @Input('data') private _componentData: Models.SaleTrends

  /**
   *  IMPORTANT charts will not render dynamically unless a ViewChild is specified
   */
   @ViewChild('dataChart', null) dataChart: ElementRef
   private selectedScale = 0
   private chart: Chart

  constructor () {
    super()
  }

  ngOnInit () { 
    // this.chart = new Chart(this.dataChart.nativeElement, {
    //   type: 'line',
    //   data: this._dataScales[this.selectedScale] ? this._dataScales[this.selectedScale] : {},
    //   options: getChartOptions(getColor(this.backgroundColor), 'MWK'),
    // })
    // this.updateScale(this.selectedScale)
  }

  // /**
  //  * return the ion-color of the selected timescale
  //  */
  // isSelectedScale (index: number): string {
  //   return this.selectedScale === index ? this.backgroundColor : 'grey-light'
  // }

  // /**
  //  * Update the scale and its labels
  //  */
  // updateScale (index: number): void {
  //   this.selectedScale = index
  //   if (this._dataScales[index]) {
  //     this.chart.data = this._dataScales[this.selectedScale]
  //     this.chart.update()
  //   }
  // }

  //#region Markup Getters

  get componentData () {
    return this._componentData
  }

  //#endregion
}
