//#region Api/Provider Data

export class CashTotals {
  cashInTill: number
  cashInSafe: number
  cashOnPremise: number
  totalCashSales: number
  totalCredits: number
  cashDrops: CashExpense[]
  expenses: CashExpense[]
  payIn: CashExpense[]
  payInTotals: number
  expensesTotals: number
  lastCollection: LastCollection

  constructor (data) {
    this.cashInTill = data && data.cashInTill ? data.cashInTill : 59500
    this.cashInSafe = data && data.cashInSafe ? data.cashInSafe : 59500
    this.cashOnPremise = data && data.cashOnPremise ? data.cashOnPremise : 0
    this.totalCashSales = data && data.totalCashSales ? data.totalCashSales : 0
    this.totalCredits = data && data.totalCredits ? data.totalCredits : 0
    this.cashDrops = data && data.cashDrops ? new CashExpense[data.cashDrops] : []
    this.expenses = data && data.expenses ? new CashExpense[data.expenses] : []
    this.payIn = data && data.payIn ? new CashExpense[data.payIn] : []
    this.payInTotals = data && data.payInTotals ? data.payInTotals : 0
    this.expensesTotals = data && data.expensesTotals ? data.expensesTotals : 0
    this.lastCollection = data && data.lastCollection ? new LastCollection(data.lastCollection) : null
  }
}

export class CashExpense {
  id: number
  companyId: number
  userId: number
  cashCollectionId: string
  locationId: string
  locationName: string
  type: string
  typeCode: number
  typeName: string
  typeDescription: string
  amount: number
  referenceNumber: string
  sageGlEntry: string
  note: string
  sageIntegrated: number
  sageIntegratedDate: Date
  errorMessage: string
  status: string
  isReversal: number
  createdAt: Date
  updatedAt: Date
  deletedAt: Date

  constructor (data) {
    this.id = data && data.id ? data.id : 0
    this.companyId = data && data.companyId ? data.companyId : 0
    this.userId = data && data.userId ? data.userId : 0
    this.cashCollectionId = data && data.cashCollectionId ? data.cashCollectionId : ''
    this.locationId = data && data.locationId ? data.locationId : ''
    this.locationName = data && data.locationName ? data.locationName : ''
    this.type = data && data.type ? data.type : ''
    this.typeCode = data && data.typeCode ? data.typeCode : 0
    this.typeName = data && data.typeName ? data.typeName : ''
    this.typeDescription = data && data.typeDescription ? data.typeDescription : ''
    this.amount = data && data.amount ? data.amount : 0
    this.referenceNumber = data && data.referenceNumber ? data.referenceNumber : ''
    this.sageGlEntry = data && data.sageGlEntry ? data.sageGlEntry : ''
    this.note = data && data.note ? data.note : ''
    this.sageIntegrated = data && data.sageIntegrated ? data.sageIntegrated : 0
    this.sageIntegratedDate = data && data.sageIntegratedDate ? data.sageIntegratedDate : null
    this.errorMessage = data && data.errorMessage ? data.errorMessage : ''
    this.status = data && data.status ? data.status : ''
    this.isReversal = data && data.isReversal ? data.isReversal : 0
    this.createdAt = data && data.createdAt ? data.createdAt : null
    this.updatedAt = data && data.updatedAt ? data.updatedAt : null
    this.deletedAt = data && data.deletedAt ? data.deletedAt : null
  }
}

export class LastCollection {
  createdAt: Date
  remainingCashInTill: number
  totalCollected: number
  varianceAmount: number

  constructor (data) {
    this.createdAt = data && data.createdAt ? data.createdAt :
      null
    this.remainingCashInTill = data && data.remainingCashInTill ? data.remainingCashInTill : 0
    this.totalCollected = data && data.totalCollected ? data.totalCollected : 0
    this.varianceAmount = data && data.varianceAmount ? data.varianceAmount : 0
  }
}

//#endregion

//#region Page Data

export class ProgressBarData {
  title: string
  progress: number
  target: number

  constructor (data) {
    this.title = data && data.title ? data.title : ''
    this.progress = data && data.progress ? data.progress : 0
    this.target = data && data.target ? data.target : 0
  }
}

//#endregion
