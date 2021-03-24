import { Injectable } from '@angular/core';

import * as Models from '../models/index'

@Injectable({
  providedIn: 'root'
})
export class AppStateService {

  constructor () { }

  branchInfo: Models.BranchInfo = {
    companyId: 1,
    companyName: 'Farmers World',
    companyImage: null,
    id: '102',
    name: 'Mwami',
    contactNumber: null,
    shopImage: ''
  }

  deviceConnectivity: Models.DeviceConnectivity = {
    connected: true,
    fiscalConnected: true,
    piConnected: true,
    printerConnected: true
  }

  deviceInfo: Models.DeviceInfo = {
    battery: {
      level: 100,
      charging: false
    },
    coords: {
      latitude: null,
      longitude: null
    },
    manufacturer: null,
    model: null,
    serial: null,
    shopId: null,
    lastSeen: null,
    versionNumber: null,
    minimumServerVersion: null,
    isVersionOutdated: null
  }

  branchConfig: Models.BranchConfig = {
    id: 4,
    companyId: 1,
    locationId: "307",
    locationName: "Kayoyo",
    config: {
      blindStockCounts: true,
      quoteValidDays: 7,
      taxPercentage: 16.5,
      captureCustomerDetails: true,
      cashManagement: {
        maxAmountInTill: 100000,
        maxAmountInSafe: 500000
      },
      defaultSupplyingLocation: {
        id: '905',
        name: 'Nsangu Warehouse'
      },
      paymentMethods: [
        {
          name: "Cash",
          type: "cash",
          active: true
        },
        {
          name: "Card",
          type: "card",
          active: false
        },
        {
          name: "Cheque",
          type: "cheque",
          active: false
        }
      ],
      expenseReasons: null,
      fispSeason: true,
      saleDiscount: 5,
      isBulkLocation: false
    },
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: new Date()
  }

}
