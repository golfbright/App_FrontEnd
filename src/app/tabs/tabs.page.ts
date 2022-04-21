import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import {
  ActionPerformed,
  PushNotificationSchema,
  PushNotifications,
  Token,
} from '@capacitor/push-notifications';
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

  //  ===========================================<notify>============================================================
  console.log('Initializing HomePage');

  // Request permission to use push notifications
  // iOS will prompt user and return if they granted permission or not
  // Android will just grant without prompting
  PushNotifications.requestPermissions().then(result => {
    if (result.receive === 'granted') {
      // Register with Apple / Google to receive push via APNS/FCM
      PushNotifications.register();
    } else {
      // Show some error
    }
  });

  // On success, we should be able to receive notifications
  PushNotifications.addListener('registration',
    (token: Token) => {
      alert('Push registration success, token: ' + token.value);
    }
  );

  // Some issue with our setup and push will not work
  PushNotifications.addListener('registrationError',
    (error: any) => {
      alert('Error on registration: ' + JSON.stringify(error));
    }
  );

  // Show us the notification payload if the app is open on our device
  PushNotifications.addListener('pushNotificationReceived',
    (notification: PushNotificationSchema) => {
      alert('Push received: ' + JSON.stringify(notification));
    }
  );

  // Method called when tapping on a notification
  PushNotifications.addListener('pushNotificationActionPerformed',
    (notification: ActionPerformed) => {
      alert('Push action performed: ' + JSON.stringify(notification));
    }
  );
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
