import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule),
  },
  {
    path: 'account-detail',
    loadChildren: () => import('./pages/account-detail/account-detail.module').then( m => m.AccountDetailPageModule)
  },
  {
    path: 'showtask-list',
    loadChildren: () => import('./pages/showtask-list/showtask-list.module').then( m => m.ShowtaskListPageModule)
  },
  {
    path: 'showtask-complete',
    loadChildren: () => import('./pages/showtask-complete/showtask-complete.module').then( m => m.ShowtaskCompletePageModule)
  },
  {
    path: 'showtask-progress',
    loadChildren: () => import('./pages/showtask-progress/showtask-progress.module').then( m => m.ShowtaskProgressPageModule)
  },
  {
    path: 'showtask-booked',
    loadChildren: () => import('./pages/showtask-booked/showtask-booked.module').then( m => m.ShowtaskBookedPageModule)
  },
  {
    path: 'qrcode',
    loadChildren: () => import('./qrcode/qrcode/qrcode.module').then( m => m.QrcodePageModule)
  },
  {
    path: 'camera',
    loadChildren: () => import('./camera/camera.module').then( m => m.CameraPageModule)
  },
  {
    path: 'intro',
    loadChildren: () => import('./pages/intro/intro.module').then( m => m.IntroPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
