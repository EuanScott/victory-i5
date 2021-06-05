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
  LoginService,
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
  protected loginService: LoginService
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

  protected displayFab: boolean


  constructor (pageName: string = '') {
    // Custom Services
    this.alertService = this.injector.get(AlertService)
    this.appStateService = this.injector.get(AppStateService)
    this.dashboardService = this.injector.get(DashboardService)
    this.loaderService = this.injector.get(LoaderService)
    this.loginService = this.injector.get(LoginService)
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
    this.displayFab = false
  }

  /**
   * Scrolls the user to the top of the page
   */
  scrollToTop (): void {
    this.content.scrollToTop(800)
  }

  /**
   * Note: 
   * To use this method, the following code needs to be added to <ion-content>:
   *
   * <ion-content [scrollEvents]="true" (ionScroll)="scrolling($event)">
   * 
   * @param event The scroll event
   */
  scrolling (event): void {
    const bottomPosition = event.target.clientHeight + event.detail.scrollTop
    const screenSize = event.target.clientHeight
    this.displayFab = screenSize - bottomPosition <= -320
  }
}

