import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { TaskTransportService } from 'src/app/services/task-transport.service';

@Component({
  selector: 'app-showtask-list',
  templateUrl: './showtask-list.page.html',
  styleUrls: ['./showtask-list.page.scss'],
})
export class ShowtaskListPage implements OnInit {
  taskList :any;

  constructor(private route: Router,private taskTransportService: TaskTransportService,private alertController: AlertController,private authService: AuthenticationService) {
    
   }

  ngOnInit() {
    
    this.taskTransportService.getTransport().subscribe((res: any)=>{
      console.log(res);
      this.taskList = res;
    })

  }
  trimString(string, length) {
    return string.length > length
      ? string.substring(0, length) + "..."
      : string;
  }

  pageBooked(task){
    this.taskTransportService.getTransportById(task.id).subscribe(async (res: any)=>{
      console.log(res);
      
      if(res[0].accountId == 0){
        console.log("res");
        const accountData = this.authService.isLoggedIn();
        console.log(accountData.id);
        task.accountId = accountData.id;
        task.taskStatus = "ได้รับการจอง";
        this.taskTransportService.addTransport(task).subscribe(
          async (res) => {
            console.log(res);
            this.ngOnInit();
            
            const alert = await this.alertController.create({
              header: 'ทำการจองสำเร็จ',
              message: 'คุณได้ทำการจองงานขนส่งนี้สามารถดูรายละเอียดได้ที่หน้างานของฉัน',
              buttons: [
                {
                  text: 'ไปที่หน้างานของฉัน',
                  id: 'confirm-button',
                  handler: () => {
                    this.route.navigate(['tabs/showtask-booked']);
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
          header: 'ไม่สามารถจองงานได้',
          message: 'งานขนส่งนี้ได้รับการจองไปแล้วหรือไม่มีอยู่แล้ว',
          buttons: ['OK'],
        });
               alert.present();
      }
    })
    // this.route.navigate(['tabs/showtask-booked']);
  }

  pageMap(task){
    console.log(task.gps);
      this.route.navigate(['googlemap',{dataFormParam: task.gps}]);
  }

  reload(event){

    this.taskTransportService.getTransport().subscribe((res: any)=>{
      console.log(res);
      this.taskList = res;
    })

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 1000);
  }
}
