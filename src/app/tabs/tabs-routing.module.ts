import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'showtask-list',
        loadChildren: () => import('../pages/showtask-list/showtask-list.module').then(m => m.ShowtaskListPageModule)
      },
      {
        path: 'showtask-booked',
        loadChildren: () => import('../pages/showtask-booked/showtask-booked.module').then(m => m.ShowtaskBookedPageModule)
      },
      {
        path: 'showtask-progress',
        loadChildren: () => import('../pages/showtask-progress/showtask-progress.module').then(m => m.ShowtaskProgressPageModule)
      },
      {
        path: 'showtask-complete',
        loadChildren: () => import('../pages/showtask-complete/showtask-complete.module').then(m => m.ShowtaskCompletePageModule)
      },
      {
        path: 'account-detail',
        loadChildren: () => import('../pages/account-detail/account-detail.module').then(m => m.AccountDetailPageModule)
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
        redirectTo: '/tabs/account-detail',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/account-detail',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
