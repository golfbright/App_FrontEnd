import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShowtaskCompleteCardealerPage } from './showtask-complete-cardealer.page';

const routes: Routes = [
  {
    path: '',
    component: ShowtaskCompleteCardealerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShowtaskCompleteCardealerPageRoutingModule {}
