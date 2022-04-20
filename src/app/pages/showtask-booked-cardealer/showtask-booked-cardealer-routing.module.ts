import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShowtaskBookedCardealerPage } from './showtask-booked-cardealer.page';

const routes: Routes = [
  {
    path: '',
    component: ShowtaskBookedCardealerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShowtaskBookedCardealerPageRoutingModule {}
