import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActiveDriverListPageRoutingModule } from './active-driver-list-routing.module';

import { ActiveDriverListPage } from './active-driver-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActiveDriverListPageRoutingModule
  ],
  declarations: [ActiveDriverListPage]
})
export class ActiveDriverListPageModule {}
