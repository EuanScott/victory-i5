import { Injectable } from '@angular/core'

import { Device } from '@capacitor/device'
import { Geolocation } from '@capacitor/geolocation'

import { AppStateService } from './app-state.service'

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor (
    private appStateService: AppStateService
  ) { }

  handleLogin (): void {
    this.getDeviceInfo()
    // this.getLocationInfo()
  }

  private async getDeviceInfo (): Promise<void> {
    const { batteryLevel, isCharging } = await Device.getBatteryInfo()

    this.appStateService.deviceInfo.battery.level = batteryLevel
    this.appStateService.deviceInfo.battery.charging = isCharging
  }

  /**
   * Note: Switch location permissions on for this to work
   * TODO: Test this on emulator to see if it asks for permission first:
   * https://stackoverflow.com/questions/57040213/request-gps-permission-using-capacitor-ionic
   */
  private async getLocationInfo (): Promise<void> {

    const { coords } = await Geolocation.getCurrentPosition()

    this.appStateService.deviceInfo.coords.latitude = coords.latitude
    this.appStateService.deviceInfo.coords.longitude = coords.longitude
  }
}
