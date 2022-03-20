import { Component, OnInit } from '@angular/core';
import { ZBarOptions, ZBar } from '@ionic-native/zbar/ngx';

@Component({
  selector: 'app-qrcode',
  templateUrl: './qrcode.page.html',
  styleUrls: ['./qrcode.page.scss'],
})
export class QrcodePage implements OnInit {
qrData = null;
createdCode = null;
scannedCode = null;
optionZbar:any;
scannedOutput:any;

  constructor(private zbarPlugin: ZBar)
  {
    this.optionZbar = {
      flash: 'off',
      drawSight: false
    }
   }

  ngOnInit() {
  }
  createQRCode(){
    this.createdCode = this.qrData;
  }
  qrCodeScanner(){
    this.zbarPlugin.scan(this.optionZbar)
   .then(respone => {
      console.log(respone);
      this.scannedOutput = respone;
   })
   .catch(error => {
      alert(error);
   });
  }
}
