import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShowtaskProgressPage } from './showtask-progress.page';

const routes: Routes = [
  {
    path: '',
    component: ShowtaskProgressPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShowtaskProgressPageRoutingModule {}
