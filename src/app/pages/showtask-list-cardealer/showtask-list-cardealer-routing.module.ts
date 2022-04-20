import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShowtaskListCardealerPage } from './showtask-list-cardealer.page';

const routes: Routes = [
  {
    path: '',
    component: ShowtaskListCardealerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShowtaskListCardealerPageRoutingModule {}
