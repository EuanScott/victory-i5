import { SaleType } from '../enums/sale.enum'
export class SalesKpi {
  totalSalesForDay: number
  totalSalesForWeek: number
  totalSalesForMonth: number
  totalTransactionsForDay: number

  constructor (data) {
    this.totalSalesForDay = data && data.totalSalesForDay ? data.totalSalesForDay : 0
    this.totalSalesForWeek = data && data.totalSalesForWeek ? data.totalSalesForWeek : 0
    this.totalSalesForMonth = data && data.totalSalesForMonth ? data.totalSalesForMonth : 0
    this.totalTransactionsForDay = data && data.totalTransactionsForDay ? data.totalTransactionsForDay : 0
  }
}

export class SaleTrends {
  days: Day[]
  weeks: Day[]
  months: Day[]

  constructor (data) {
    this.days = data && data.days ? new Day[data.days] : []
    this.weeks = data && data.weeks ? new Day[data.weeks] : []
    this.months = data && data.months ? new Day[data.months] : []
  }
}

export class Day {
  total: number
  date: string //Date

  constructor (data) {
    this.total = data && data.total ? data.total : 0
    this.date = data && data.date ? data.date : '2021-01-01'
  }
}

export class SalesSliderData {
  title: string
  name: string
  amount: number
  subtitle: string
  color: string

  constructor (data) {
    this.title = data && data.title ? data.title : ''
    this.name = data && data.name ? data.name : ''
    this.amount = data && data.amount ? data.amount : 0
    this.subtitle = data && data.subtitle ? data.subtitle : ''
    this.color = data && data.color ? data.color : ''
  }
}

export interface SaleData {
  sageInvoiceNumber: string
  victoryInvoiceNumber: string
  dateCreated: Date
  value: number
  type: SaleType
  color: string
}

export interface SaleIdentifiers {
  sageInvoiceNumber: string
  type: string
}
