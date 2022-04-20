import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShowtaskBookedCardealerPageRoutingModule } from './showtask-booked-cardealer-routing.module';

import { ShowtaskBookedCardealerPage } from './showtask-booked-cardealer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShowtaskBookedCardealerPageRoutingModule
  ],
  declarations: [ShowtaskBookedCardealerPage]
})
export class ShowtaskBookedCardealerPageModule {}
