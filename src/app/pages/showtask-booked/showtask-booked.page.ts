import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { TaskTransportService } from 'src/app/services/task-transport.service';
import { GooglemapPageModule } from '../googlemap/googlemap.module';

@Component({
  selector: 'app-showtask-booked',
  templateUrl: './showtask-booked.page.html',
  styleUrls: ['./showtask-booked.page.scss'],
})
export class ShowtaskBookedPage implements OnInit {
  taskList :any;
  accountData:any;

  constructor(public modalController: ModalController,private route: Router,private taskTransportService: TaskTransportService,private alertController: AlertController,private authService: AuthenticationService) {
    this.accountData = this.authService.isLoggedIn();
        console.log(this.accountData.id);
   }

  ngOnInit() {
    
    this.taskTransportService.getTransportBooked(this.accountData.id).subscribe((res: any)=>{
      console.log(res);
      this.taskList = res;
    })

  }

  trimString(string, length) {
    return string.length > length
      ? string.substring(0, length) + "..."
      : string;
  }

  pageMap(task){
    console.log(task.gps);
      this.route.navigate(['googlemap',{dataFormParam: task.gps}]);
  }

  pageQRcode(qrcode){
    console.log(qrcode.taskNumber);
    this.route.navigate(['qrcode',{dataFormParam: qrcode.taskNumber}]);
  }


  reload(event){

    this.ngOnInit();
    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 1000);
  }

  cancelBook(task){
    this.taskTransportService.getTransportById(task.id).subscribe(async (res: any)=>{
      console.log(res);
      
      if(res[0].accountId != 0){
        console.log("res");
        const accountData = this.authService.isLoggedIn();
        console.log(accountData.id);
        task.accountId = 0;
        task.taskStatus = "ยังไม่ได้ดำเนินการ";
        this.taskTransportService.addTransport(task).subscribe(
          async (res) => {
            console.log(res);
            this.ngOnInit();
            
            const alert = await this.alertController.create({
              header: 'ทำการยกเลิกจองสำเร็จ',
              message: 'คุณได้ทำการยกเลิกจองงานขนส่งนี้สามารถดูรายละเอียดได้ที่หน้าจองงาน',
              buttons: [
                {
                  text: 'ไปที่หน้าจองงาน',
                  id: 'confirm-button',
                  handler: () => {
                    this.route.navigate(['tabs/showtask-list']);
                  }
                }
              ],
            });
                   alert.present();
          }, (error) => {

          });

      }
      else
      {
        const alert = await this.alertController.create({
          header: 'ไม่สามารถยกเลิกจองงานได้',
          message: 'งานขนส่งนี้ได้รับการยกเลิกจองไปแล้วหรือไม่มีอยู่แล้ว',
          buttons: ['OK'],
        });
               alert.present();
      }
    })
    // this.route.navigate(['tabs/showtask-booked']);
  }
}
