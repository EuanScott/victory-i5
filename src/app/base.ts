import { Injector } from '@angular/core'
import { Router } from '@angular/router'

import {
  AlertController,
  LoadingController,
  PopoverController,
  ToastController
} from '@ionic/angular'

import {
  AlertService,
  AppStateService,
  DashboardService,
  LoaderService,
  ToastService
} from './shared/services/index'
import { appInjector } from './shared/helpers'

export class BasePage {

  // get the stored reference to the injector
  injector: Injector = appInjector()

  // Custom Services
  protected alertService: AlertService
  protected appStateService: AppStateService
  protected dashboardService: DashboardService
  protected loaderService: LoaderService
  protected toastService: ToastService

  // Ionic Controllers
  protected alertController: AlertController
  protected loadingController: LoadingController
  protected popoverController: PopoverController
  protected toastController: ToastController

  // Angular
  protected router: Router

  // Page Variables
  private _pageName: string

  constructor (pageName: string = '') {
    // Custom Services
    this.alertService = this.injector.get(AlertService)
    this.appStateService = this.injector.get(AppStateService)
    this.dashboardService = this.injector.get(DashboardService)
    this.loaderService = this.injector.get(LoaderService)
    this.toastService = this.injector.get(ToastService)

    // Ionic Controllers
    this.alertController = this.injector.get(AlertController)
    this.loadingController = this.injector.get(LoadingController)
    this.popoverController = this.injector.get(PopoverController)
    this.toastController = this.injector.get(ToastController)

    //Angular
    this.router = this.injector.get(Router)

    // Page Variables
    this._pageName = pageName
  }

  ionViewDidEnter () {
    this.toastService.dismissToast()
  }
}

