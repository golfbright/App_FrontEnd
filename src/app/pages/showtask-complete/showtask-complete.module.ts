import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShowtaskCompletePageRoutingModule } from './showtask-complete-routing.module';

import { ShowtaskCompletePage } from './showtask-complete.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShowtaskCompletePageRoutingModule
  ],
  declarations: [ShowtaskCompletePage]
})
export class ShowtaskCompletePageModule {}
