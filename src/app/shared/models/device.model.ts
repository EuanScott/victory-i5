export interface DeviceInfo {
  battery: Battery,
  coords: Coordinates
}
export interface Battery {
  level: number,
  charging: boolean
}
export interface Coordinates {
  latitude: number,
  longitude: number
}
