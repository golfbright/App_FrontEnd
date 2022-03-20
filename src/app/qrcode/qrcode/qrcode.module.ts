import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { QrcodePageRoutingModule } from './qrcode-routing.module';
import { QrcodePage } from './qrcode.page';
import { NgxQRCodeModule } from '@techiediaries/ngx-qrcode';
import { ZBar } from '@ionic-native/zbar/ngx';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QrcodePageRoutingModule,
    NgxQRCodeModule
  ],
  declarations: [QrcodePage],
  providers: [
    ZBar
  ]
})
export class QrcodePageModule {}
