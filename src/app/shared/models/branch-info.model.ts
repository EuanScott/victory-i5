import { ExpenseType } from '../enums'

export interface BranchInfo {
  companyId: number
  companyName: string
  companyImage: string
  id: string
  name: string
  contactNumber: string
  shopImage?: string
}

export interface BranchConfig {
  config: Config
  createdAt: Date
  updatedAt: Date
  deletedAt: Date
}

export interface Config {
  blindStockCounts: boolean
  quoteValidDays: number
  taxPercentage: number
  captureCustomerDetails: boolean
  cashManagement: CashManagement
  defaultSupplyingLocation: DefaultSupplyingLocation
  paymentMethods: PaymentMethod[]
  expenseReasons: ExpenseReason[]
  fispSeason: boolean
  saleDiscount: number
  isBulkLocation: boolean
}

export interface CashManagement {
  maxAmountInTill: number
  maxAmountInSafe: number
}

export interface DefaultSupplyingLocation {
  id: string
  name: string
}

export interface ExpenseReason {
  typeCode: number
  type: ExpenseType
  typeName: string
  typeDescription: string
  noteRequired: boolean
  referenceNumberRequired: boolean
  referenceNumberPrefix: string
  referenceNumberHint: string
  referenceNumberCharacterLength: number
  active: boolean
}

export interface PaymentMethod {
  name: string
  type: string
  active: boolean
}
