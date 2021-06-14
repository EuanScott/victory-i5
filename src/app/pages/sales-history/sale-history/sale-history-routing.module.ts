import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SaleHistoryPage } from './sale-history.page';

const routes: Routes = [
  {
    path: '',
    component: SaleHistoryPage
  },
  {
    path: 'sale-details',
    loadChildren: () => import('../sale-details/sale-details.module').then( m => m.SaleDetailsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SaleHistoryPageRoutingModule {}
