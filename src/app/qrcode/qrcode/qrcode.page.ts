import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ZBarOptions, ZBar } from '@ionic-native/zbar/ngx';
import { Platform } from '@ionic/angular';

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

  constructor(private platform: Platform,private route: Router,private routes: ActivatedRoute,private zbarPlugin: ZBar)
  {
    this.optionZbar = {
      flash: 'off',
      drawSight: false
    }
    this.routes.params.subscribe((params: Params) => this.qrData = params['dataFormParam']);
    
   }

  ngOnInit() {
    this.createdCode = this.qrData;
  }
  createQRCode(){
   
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
