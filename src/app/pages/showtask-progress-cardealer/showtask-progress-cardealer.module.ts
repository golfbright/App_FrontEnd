import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShowtaskProgressCardealerPageRoutingModule } from './showtask-progress-cardealer-routing.module';

import { ShowtaskProgressCardealerPage } from './showtask-progress-cardealer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShowtaskProgressCardealerPageRoutingModule
  ],
  declarations: [ShowtaskProgressCardealerPage]
})
export class ShowtaskProgressCardealerPageModule {}
