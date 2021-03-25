import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { IonicModule } from '@ionic/angular'
import { FormsModule } from '@angular/forms'

import { HeaderComponent } from './header/header.component'
import { HeaderPopoverComponent } from './header-popover/header-popover.component'
import { KeypadComponent } from './keypad/keypad.component'

const IMPORTS = [
]
const DECLARATIONS = [
  HeaderComponent,
  HeaderPopoverComponent,
  KeypadComponent
]
const EXPORTS = [
  HeaderComponent,
  HeaderPopoverComponent,
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
