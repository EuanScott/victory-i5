import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SaleListingPage } from './sale-listing.page';

const routes: Routes = [
  {
    path: '',
    component: SaleListingPage
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
export class SaleListingPageRoutingModule {}
