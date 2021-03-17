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
