import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShowtaskBookedPageRoutingModule } from './showtask-booked-routing.module';

import { ShowtaskBookedPage } from './showtask-booked.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShowtaskBookedPageRoutingModule
  ],
  declarations: [ShowtaskBookedPage]
})
export class ShowtaskBookedPageModule {}
