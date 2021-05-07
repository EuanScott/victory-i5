import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { IonicModule } from '@ionic/angular'
import { FormsModule } from '@angular/forms'

import { KeypadComponent } from './keypad/keypad.component'
import { HeaderComponent } from './header/header.component'
import { HeaderPopoverComponent } from './header-popover/header-popover.component'
import { NoDataComponent } from './no-data/no-data.component'

const IMPORTS = [
]
const DECLARATIONS = [
  KeypadComponent,
  HeaderComponent,
  HeaderPopoverComponent,
  NoDataComponent
]
const EXPORTS = [
  KeypadComponent,
  HeaderComponent,
  HeaderPopoverComponent,
  NoDataComponent
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
