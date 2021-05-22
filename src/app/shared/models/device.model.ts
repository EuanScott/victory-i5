export interface DeviceInfo {
  battery: Battery,
  coords: Coordinates,
  manufacturer: string,
  model: string,
  serial: string,
  shopId: string,
  lastSeen: string,
  versionNumber: string,
  minimumServerVersion: string,
  isVersionOutdated: boolean
}
export interface Battery {
  level: number,
  charging: boolean
}
export interface Coordinates {
  latitude: number,
  longitude: number
}
