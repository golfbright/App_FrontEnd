import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { TaskTransportService } from 'src/app/services/task-transport.service';

@Component({
  selector: 'app-showtask-list-cardealer',
  templateUrl: './showtask-list-cardealer.page.html',
  styleUrls: ['./showtask-list-cardealer.page.scss'],
})
export class ShowtaskListCardealerPage implements OnInit {
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
    this.route.navigate(['active-driver-list',{taskId: task.id}]);
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
