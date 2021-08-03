import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
 
const routes: Routes = [
  { path: 'dashboard', loadChildren: './../dashboard/dashboard.module#DashboardPageModule' },
  { path: 'community', loadChildren: './../community/community.module#CommunityPageModule' },
  { path :'contactDashboard/:user_id', loadChildren : './../contact-dashboard/contact-dashboard.module#ContactDashboardPageModule',}
];
 
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MemberRoutingModule { }