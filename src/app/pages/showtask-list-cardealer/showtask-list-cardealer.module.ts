import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShowtaskListCardealerPageRoutingModule } from './showtask-list-cardealer-routing.module';

import { ShowtaskListCardealerPage } from './showtask-list-cardealer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShowtaskListCardealerPageRoutingModule
  ],
  declarations: [ShowtaskListCardealerPage]
})
export class ShowtaskListCardealerPageModule {}
