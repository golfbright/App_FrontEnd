import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShowtaskBookedPage } from './showtask-booked.page';

const routes: Routes = [
  {
    path: '',
    component: ShowtaskBookedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShowtaskBookedPageRoutingModule {}
