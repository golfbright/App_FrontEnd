import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },  {
    path: 'account-detail',
    loadChildren: () => import('./accountdetail/account-detail/account-detail.module').then( m => m.AccountDetailPageModule)
  },
  {
    path: 'showtask-list',
    loadChildren: () => import('./showtasklist/showtask-list/showtask-list.module').then( m => m.ShowtaskListPageModule)
  },
  {
    path: 'showtask-complete',
    loadChildren: () => import('./showtaskcomplete/showtask-complete/showtask-complete.module').then( m => m.ShowtaskCompletePageModule)
  },
  {
    path: 'showtask-progress',
    loadChildren: () => import('./showtaskprogress/showtask-progress/showtask-progress.module').then( m => m.ShowtaskProgressPageModule)
  },
  {
    path: 'showtask-booked',
    loadChildren: () => import('./showtaskbooked/showtask-booked/showtask-booked.module').then( m => m.ShowtaskBookedPageModule)
  },
  {
    path: 'qrcode',
    loadChildren: () => import('./qrcode/qrcode/qrcode.module').then( m => m.QrcodePageModule)
  },
  {
    path: 'camera',
    loadChildren: () => import('./camera/camera.module').then( m => m.CameraPageModule)
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
