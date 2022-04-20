import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActiveDriverListPage } from './active-driver-list.page';

const routes: Routes = [
  {
    path: '',
    component: ActiveDriverListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActiveDriverListPageRoutingModule {}
