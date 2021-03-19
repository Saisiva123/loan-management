import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path:'',redirectTo:'/homePage',pathMatch:'full' },
  { path: 'homePage', loadChildren: () => import('./home-page/home-page.module').then(m => m.HomePageModule) },
  { path: '**', redirectTo:'/homePage' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
