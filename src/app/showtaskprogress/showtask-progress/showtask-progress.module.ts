import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShowtaskProgressPageRoutingModule } from './showtask-progress-routing.module';

import { ShowtaskProgressPage } from './showtask-progress.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShowtaskProgressPageRoutingModule
  ],
  declarations: [ShowtaskProgressPage]
})
export class ShowtaskProgressPageModule {}
