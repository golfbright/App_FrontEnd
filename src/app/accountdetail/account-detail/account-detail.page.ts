import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  constructor(private router: Router, private authService: AuthenticationService) {
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
  }

  ngOnInit() {

  }

  showImgPath() {
    return this.url;
  }

  async logout() {
    this.router.navigate(['/login']);
    localStorage.clear();
  }
}
