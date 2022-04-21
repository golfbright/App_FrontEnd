import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { TaskTransportService } from 'src/app/services/task-transport.service';

@Component({
  selector: 'app-showtask-booked-cardealer',
  templateUrl: './showtask-booked-cardealer.page.html',
  styleUrls: ['./showtask-booked-cardealer.page.scss'],
})
export class ShowtaskBookedCardealerPage implements OnInit {

  taskList :any;
  accountData:any;

  constructor(private route: Router,private taskTransportService: TaskTransportService,private alertController: AlertController,private authService: AuthenticationService) {
    this.accountData = this.authService.isLoggedIn();
        console.log(this.accountData.id);
   }

  ngOnInit() {
    
    this.taskTransportService.getTransportBookedCarDealer().subscribe((res: any)=>{
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

  qrcodeScan() {
    this.route.navigate(['camera']);
  }
  

  reload(event){

    this.ngOnInit();
    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 1000);
  }

}
