import { Injector } from '@angular/core'
import { Router, ActivatedRoute } from '@angular/router'

import { PopoverController } from '@ionic/angular'

import { appInjector } from './shared/helpers'

import {
  AppStateService
} from './shared/services/index'


export class BasePage {

  // get the stored reference to the injector
  injector: Injector = appInjector()

  protected appStateService: AppStateService

  protected popoverController: PopoverController

  constructor () {
    // Services
    this.appStateService = this.injector.get(AppStateService)

    // Ionic Controllers
    this.popoverController = this.injector.get(PopoverController)
  }
}

