import { Injectable } from '@angular/core';

import * as Models from '../models/index'

@Injectable({
  providedIn: 'root'
})
export class AppStateService {

  constructor () { }

  shopInfo: Models.ShopInfo = {
    companyId: 1,
    companyName: 'Farmers World',
    companyImage: null,
    id: '102',
    name: 'Mwami',
    contactNumber: null,
    shopImage: ''
  }

  deviceConnection: Models.DeviceConnection = {
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

}
