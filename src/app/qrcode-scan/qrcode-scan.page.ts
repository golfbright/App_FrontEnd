import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-qrcode-scan',
  templateUrl: './qrcode-scan.page.html',
  styleUrls: ['./qrcode-scan.page.scss'],
})
export class QrcodeScanPage implements OnInit {
result = null;
scanActive = false;
  constructor(private alertController: AlertController) { }

  ngOnInit() {
    
  }

  public async startScan() {
    // const { BarcodeScanner } = Plugins;
    await this.checkPermission();
    BarcodeScanner.hideBackground(); // make background of WebView transparent
    document.body.classList.add("qrscanner"); // add the qrscanner class to body
    const result = await BarcodeScanner.startScan(); // startscan
    document.body.classList.remove("qrscanner"); // remove the qrscanner from the body    
   
    // if the result has content
    if (result.hasContent) {
      const alert = await this.alertController.create({
        header: 'Alert',
        subHeader: 'Subtitle',
        message: `barcode scanning result=${result.content}`,
        buttons: ['OK']
      });
      await alert.present();
     // log the raw scanned content
    }
  }

  async checkPermission(){
    const status = await BarcodeScanner.checkPermission({ force: true });

  if (status.granted) {
    // the user granted permission
    return true;
  }

  return false;
  }
}
