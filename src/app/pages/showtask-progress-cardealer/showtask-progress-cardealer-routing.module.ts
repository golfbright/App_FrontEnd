import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShowtaskProgressCardealerPage } from './showtask-progress-cardealer.page';

const routes: Routes = [
  {
    path: '',
    component: ShowtaskProgressCardealerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShowtaskProgressCardealerPageRoutingModule {}
