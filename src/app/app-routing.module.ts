import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./pages/home/tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'basket',
    loadChildren: () => import('./pages/home/basket/basket.module').then( m => m.BasketPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./pages/home/dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'shop',
    loadChildren: () => import('./pages/home/shop/shop.module').then( m => m.ShopPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
