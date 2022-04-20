import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShowtaskCompleteCardealerPageRoutingModule } from './showtask-complete-cardealer-routing.module';

import { ShowtaskCompleteCardealerPage } from './showtask-complete-cardealer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShowtaskCompleteCardealerPageRoutingModule
  ],
  declarations: [ShowtaskCompleteCardealerPage]
})
export class ShowtaskCompleteCardealerPageModule {}
