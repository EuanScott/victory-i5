import { Injector } from '@angular/core'
import { Router } from '@angular/router'

import { LoadingController, PopoverController } from '@ionic/angular'

import { appInjector } from './shared/helpers'

import {
  AppStateService,
  DashboardService,
  LoaderService
} from './shared/services/index'

export class BasePage {

  // get the stored reference to the injector
  injector: Injector = appInjector()

  // Custom Services
  protected appStateService: AppStateService
  protected dashboardService: DashboardService
  protected loaderService: LoaderService

  // Ionic Controllers
  protected popoverController: PopoverController
  protected loadingController: LoadingController

  // Angular
  protected router: Router

  // Class variables
  private _boxShadow: boolean = false

  constructor () {
    // Custom Services
    this.appStateService = this.injector.get(AppStateService)
    this.dashboardService = this.injector.get(DashboardService)
    this.loaderService = this.injector.get(LoaderService)

    // Ionic Controllers
    this.popoverController = this.injector.get(PopoverController)
    this.loadingController = this.injector.get(LoadingController)

    //Angular
    this.router = this.injector.get(Router)
  }

  /**
   * Called on each ionScroll event
   * 
   * @param scroll The scroll event
   */
  scrolling (scroll) {
    this._boxShadow = scroll.detail.scrollTop > 12
  }

  get boxShadow (): boolean {
    return this._boxShadow
  }
}

