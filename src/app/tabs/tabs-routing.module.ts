import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        loadChildren: () => import('../tab1/tab1.module').then(m => m.Tab1PageModule)
      },
      {
        path: 'tab2',
        loadChildren: () => import('../tab2/tab2.module').then(m => m.Tab2PageModule)
      },
      {
        path: 'tab3',
        loadChildren: () => import('../tab3/tab3.module').then(m => m.Tab3PageModule)
      },
      {
        path: 'showtask-list',
        loadChildren: () => import('../showtasklist/showtask-list/showtask-list.module').then(m => m.ShowtaskListPageModule)
      },
      {
        path: 'showtask-booked',
        loadChildren: () => import('../showtaskbooked/showtask-booked/showtask-booked.module').then(m => m.ShowtaskBookedPageModule)
      },
      {
        path: 'showtask-progress',
        loadChildren: () => import('../showtaskprogress/showtask-progress/showtask-progress.module').then(m => m.ShowtaskProgressPageModule)
      },
      {
        path: 'showtask-complete',
        loadChildren: () => import('../showtaskcomplete/showtask-complete/showtask-complete.module').then(m => m.ShowtaskCompletePageModule)
      },
      {
        path: 'account-detail',
        loadChildren: () => import('../accountdetail/account-detail/account-detail.module').then(m => m.AccountDetailPageModule)
      },
      {
        path: 'qrcode',
        loadChildren: () => import('../qrcode/qrcode/qrcode.module').then(m => m.QrcodePageModule)
      },
      {
        path: 'camera',
        loadChildren:()=> import('../camera/camera-routing.module').then(m=>m.CameraPageRoutingModule)
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
