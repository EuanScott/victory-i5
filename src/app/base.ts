import { Injector, ViewChild } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'

import {
  AlertController,
  IonContent,
  LoadingController,
  NavController,
  PopoverController,
  ToastController
} from '@ionic/angular'

import {
  AlertService,
  AppStateService,
  DashboardService,
  LoaderService,
  SalesService,
  ToastService
} from './shared/services/index'
import { appInjector } from './shared/helpers'

export class BasePage {

  @ViewChild(IonContent) content: IonContent

  // get the stored reference to the injector
  injector: Injector = appInjector()

  // Custom Services
  protected alertService: AlertService
  protected appStateService: AppStateService
  protected dashboardService: DashboardService
  protected loaderService: LoaderService
  protected salesService: SalesService
  protected toastService: ToastService

  // Ionic Controllers
  protected alertController: AlertController
  protected loadingController: LoadingController
  protected popoverController: PopoverController
  protected toastController: ToastController

  // Angular
  protected activatedRoute: ActivatedRoute
  protected navController: NavController
  protected router: Router

  // Page Variables
  private _pageName: string

  constructor (pageName: string = '') {
    // Custom Services
    this.alertService = this.injector.get(AlertService)
    this.appStateService = this.injector.get(AppStateService)
    this.dashboardService = this.injector.get(DashboardService)
    this.loaderService = this.injector.get(LoaderService)
    this.salesService = this.injector.get(SalesService)
    this.toastService = this.injector.get(ToastService)

    // Ionic Controllers
    this.alertController = this.injector.get(AlertController)
    this.loadingController = this.injector.get(LoadingController)
    this.popoverController = this.injector.get(PopoverController)
    this.toastController = this.injector.get(ToastController)

    //Angular
    this.activatedRoute = this.injector.get(ActivatedRoute)
    this.navController = this.injector.get(NavController)
    this.router = this.injector.get(Router)

    // Page Variables
    this._pageName = pageName
  }

  ionViewDidEnter () {
    this.toastService.dismissToast()
  }

  /**
   * Scrolls the user to the top of the page
   */
   scrollToTop () {
    this.content.scrollToTop(800)
  }
}

