import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'dashboard',
        redirectTo: '../dashboard/dashboard.module#DashboardPageModule',
        pathMatch: 'full'
      },
      {
        path: 'shop',
        redirectTo: '../shop/shop.module#ShopPageModule',
        pathMatch: 'full'
      },
      {
        path: 'basket',
        redirectTo: '../basket/basket.module#BasketPageModule',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '../dashboard',
    pathMatch: 'full'
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
