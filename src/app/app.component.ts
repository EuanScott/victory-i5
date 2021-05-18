import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';


import { AppStateService } from './shared/services/index'
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  appPages = [
    { title: 'Home', url: '/home', icon: 'home-outline' },
    { title: 'Sales / Quotes', url: '/sales-history', icon: 'bar-chart-outline' },
    { title: 'Calculator', url: '/folder/Favorites', icon: 'calculator-outline' },
    { title: 'Cash Management', url: '/folder/Archived', icon: 'cash-outline' },
    { title: 'Stock Management', url: '/folder/Trash', icon: 'cube-outline' },
    { title: 'Stock Count', url: '/folder/Spam', icon: 'storefront-outline' },
    { title: 'LLTC', url: '/folder/LLTC', icon: 'leaf-outline' },
    { title: 'SGA', url: '/folder/SGA', icon: 'train-outline' },
    { title: 'Reports', url: '/folder/Reports', icon: 'analytics-outline' }
  ]

  constructor (
    public appStateService: AppStateService,
    private menuController: MenuController,
    private router: Router
  ) { }

  /**
   * Closes the side-menu
   */
  closeMenu () {
    this.menuController.close()
  }

  /**
   * Calls the closeMenu() method and sends the user to the login page
   */
  logout () {
    this.closeMenu()
    this.router.navigate(['/login'])
  }
}
