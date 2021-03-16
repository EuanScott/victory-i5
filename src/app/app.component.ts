import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';


import { AppStateService } from './shared/services/index'
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent{
  appPages = [
    { title: 'Home',  url: '/pages/home/dashboard', icon: 'home' },
    { title: 'Sales / Quotes', url: '/pages/sales-history', icon: 'bar-chart' },
    { title: 'Calculator', url: '/folder/Favorites', icon: 'calculator' },
    { title: 'Cash Management', url: '/folder/Archived', icon: 'cash' },
    { title: 'Stock Management', url: '/folder/Trash', icon: 'cube' },
    { title: 'Stock Count', url: '/folder/Spam', icon: 'storefront' },
    { title: 'Reports', url: '/folder/Spam', icon: 'analytics' }
  ]

  constructor(
    public appStateService: AppStateService,
    private menuController: MenuController
  ) {}

  closeMenu() {
    this.menuController.close()
  }
}
