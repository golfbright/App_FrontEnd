import { AuthenticationService } from './../../services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController, LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/services/account.service';
 
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  credentials: FormGroup;
  accountData:any;
  constructor(
    private fb: FormBuilder,
    private authService: AuthenticationService,
    private alertController: AlertController,
    private router: Router,
    private loadingController: LoadingController,
    private accountService: AccountService
  ) {
    

  }
 
  ngOnInit() {
    this.credentials = this.fb.group({
      employeeNo: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
    
  }
 
  async login() {
   console.log(this.credentials.value.employeeNo);
    this.accountService.loginChk(this.credentials.value.employeeNo,this.credentials.value.password).subscribe(async (res:any)=> {
      this.accountData = res;
      console.log(this.accountData);
      if(this.accountData.length != 0){
        localStorage.setItem('accountData',JSON.stringify(this.accountData));
        this.authService.isLoggedIn();
        this.router.navigate(['/tabs/']);
      }
      else
      {
        const alert = await this.alertController.create({
          header: 'Login failed',
          message: 'รหัสพนักงานหรือรหัสผ่านไม่ถูกต้อง',
          buttons: ['OK'],
        });
              
        alert.present();
      }
    });
  }
 
  // Easy access for form fields
  get employeeNo() {
    return this.credentials.get('employeeNo');
  }
  
  get password() {
    return this.credentials.get('password');
  }
}