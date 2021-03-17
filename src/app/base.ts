import { Injector } from '@angular/core'

import { PopoverController } from '@ionic/angular'

import { appInjector } from './shared/helpers'

import {
  AppStateService,
  DashboardService
} from './shared/services/index'


export class BasePage {

  // get the stored reference to the injector
  injector: Injector = appInjector()

  protected appStateService: AppStateService
  public dashboardService: DashboardService

  protected popoverController: PopoverController

  constructor () {
    // Services
    this.appStateService = this.injector.get(AppStateService)
    this.dashboardService = this.injector.get(DashboardService)

    // Ionic Controllers
    this.popoverController = this.injector.get(PopoverController)
  }
}

