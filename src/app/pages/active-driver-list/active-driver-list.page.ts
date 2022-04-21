import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AccountService } from 'src/app/services/account.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { TaskTransportService } from 'src/app/services/task-transport.service';


@Component({
  selector: 'app-active-driver-list',
  templateUrl: './active-driver-list.page.html',
  styleUrls: ['./active-driver-list.page.scss'],
})
export class ActiveDriverListPage implements OnInit {
  activeList :any;
  task:any;
  taskId:any;
  constructor(private route: ActivatedRoute,private router: Router,private accountService: AccountService,private alertController: AlertController,private taskTransportService :TaskTransportService,private authService :AuthenticationService) {
    this.route.params.subscribe((params: Params) => this.taskId = params['taskId']);
   }

  ngOnInit() {
    
    this.accountService.getAccountActive().subscribe((res: any)=>{
      console.log(res);
      this.activeList = res;
    })

  }
  trimString(string, length) {
    return string.length > length
      ? string.substring(0, length) + "..."
      : string;
  }

  pageBooked(activeDriver:number){
    this.taskTransportService.getTransportById(this.taskId).subscribe(async (res: any)=>{
      console.log(res);
      this.task = res[0];

      if(res[0].accountId == 0){
        console.log(this.task,activeDriver);
        
        this.task.accountId = activeDriver;
        this.task.taskStatus = "ได้รับการจอง";
        console.log(this.task);
        this.taskTransportService.addTransport(this.task).subscribe(
          async (res) => {
            console.log(res);
            this.ngOnInit();
            
            const alert = await this.alertController.create({
              header: 'ทำการจองสำเร็จ',
              message: 'คุณได้ทำการจองงานขนส่งนี้สามารถดูรายละเอียดได้ที่หน้างานจองแล้ว',
              buttons: [
                {
                  text: 'ไปที่หน้างานจองแล้ว',
                  id: 'confirm-button',
                  handler: () => {
                    this.router.navigate(['tabs/showtask-booked-cardealer']);
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

  

  reload(event){

    this.accountService.getAccountActive().subscribe((res: any)=>{
      console.log(res);
      this.activeList = res;
    })

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 1000);
  }

}
