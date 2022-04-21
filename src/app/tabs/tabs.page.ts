import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage implements OnInit {
  accountData: any;
  roleType:any = 0;
  switchMode:boolean = false;
  // 1=driver 2=car dealer 3=2role

  constructor(private authService: AuthenticationService)
  {

  }

  ngOnInit(): void {
    this.accountData = this.authService.isLoggedIn();
    console.log( this.accountData);
    this.accountData.accountRoles.forEach(e => {

     if(e.roleName == "Driver")
     {


      this.roleType = this.roleType + 1;
      localStorage.setItem('roleType',JSON.stringify(this.roleType));

     }
     else if(e.roleName == "Car Dealer")
     {
      this.roleType = this.roleType + 2
     }
   });

   console.log(this.roleType);
   if(this.roleType == 3)
   {
    this.switchMode = true;
   }
  }



  loadRoleType()
  {

  }

  switchToDriver()
  {
    this.roleType = 1
  }

  switchToCarDealer()
  {
    this.roleType = 2
  }

}
