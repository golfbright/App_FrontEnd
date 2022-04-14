import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShowtaskCompletePage } from './showtask-complete.page';

const routes: Routes = [
  {
    path: '',
    component: ShowtaskCompletePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShowtaskCompletePageRoutingModule {}
