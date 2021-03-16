import { NgModule } from '@angular/core'
import { HttpClientModule } from '@angular/common/http'

import { ComponentsModule } from './components/components.module'

import {
  AppStateService
} from './services'

const IMPORTS = [
  ComponentsModule,
  HttpClientModule,
]
const PROVIDERS = [
  AppStateService
]
const DECLARATIONS = []
const EXPORTS = [
  ComponentsModule
]

@NgModule({
  imports: [...IMPORTS],
  declarations: [...DECLARATIONS],
  exports: [...EXPORTS],
  providers: [...PROVIDERS]
})
export class SharedModule { }
