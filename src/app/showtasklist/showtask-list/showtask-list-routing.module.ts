import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShowtaskListPage } from './showtask-list.page';

const routes: Routes = [
  {
    path: '',
    component: ShowtaskListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShowtaskListPageRoutingModule {}
