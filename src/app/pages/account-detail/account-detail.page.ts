import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/services/account.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { SetBaseUrlForApi } from 'src/app/SetBaseUrlForApi';

@Component({
  selector: 'app-account-detail',
  templateUrl: './account-detail.page.html',
  styleUrls: ['./account-detail.page.scss'],
})
export class AccountDetailPage implements OnInit {
  accountData: any;
  url: any;
  roleName: string = "";
  activeStatus: boolean ;

  constructor(private router: Router,private accountService: AccountService, private authService: AuthenticationService) {
    this.accountData = authService.isLoggedIn();
    this.url = SetBaseUrlForApi.baseUrl + this.accountData.imageProfilePath;
    console.log(this.accountData,this.accountData.accountRoles.length);

    for (var i = 0; i < this.accountData.accountRoles.length; i++) {
      if (i == this.accountData.accountRoles.length - 1) {
        this.roleName = this.roleName + this.accountData.accountRoles[i].roleName;
      }
      else {
        this.roleName = this.roleName + this.accountData.accountRoles[i].roleName + " ,";
      }

    }

    if(this.accountData.status == "Active"){
      this.activeStatus = true;
    }
    else{
      this.activeStatus = false;
    }
  }

  ngOnInit() {

  }

  showImgPath() {
    return this.url;
  }

  activeChange(){
    if(this.activeStatus == true)
    {
      this.accountData.status = "Active";
    }
    else
    {
      this.accountData.status = "Not-Active";
    }

    this.accountService.addAccount(this.accountData).subscribe(
      (res) => {
        console.log(res);
      }, (error) => {
      });
  }

  async logout() {
    this.router.navigate(['/login']);
    localStorage.clear();
    window.location.reload();
    // window.location.assign('/');
  }


}
