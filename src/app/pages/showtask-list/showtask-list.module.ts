import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShowtaskListPageRoutingModule } from './showtask-list-routing.module';

import { ShowtaskListPage } from './showtask-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShowtaskListPageRoutingModule
  ],
  declarations: [ShowtaskListPage]
})
export class ShowtaskListPageModule {}
