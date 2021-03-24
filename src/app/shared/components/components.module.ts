import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { IonicModule } from '@ionic/angular'
import { FormsModule } from '@angular/forms'

import { AppHeaderComponent } from './app-header/app-header.component'
import { KeypadComponent } from './keypad/keypad.component'

const IMPORTS = [
]
const DECLARATIONS = [
  AppHeaderComponent,
  KeypadComponent
]
const EXPORTS = [
  AppHeaderComponent,
  KeypadComponent
]
const PROVIDERS = [
]

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ...IMPORTS
  ],
  declarations: [...DECLARATIONS],
  exports: [...EXPORTS],
  providers: [...PROVIDERS]
})
export class ComponentsModule { }
