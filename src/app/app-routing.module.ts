import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { NotificationsComponent } from './members/dashboard/_inc/notifications/notifications.component';
import { MusicPlayerComponent } from './members/music-player/music-player.component';
import { LoginGuardsService } from './guards/login-guards.service';
import {PostsComponent} from './members/posts/posts.component';
import { StreamsComponent } from './members/streams/streams.component';
import { CommentsComponent } from './members/comments/comments.component';
import { CanActivate } from '@angular/router/src/utils/preactivation';
// !!! Check app.component.ts  if some pages are blocked
const routes: Routes = [
  { path: '', redirectTo: 'loading-home-page', pathMatch: 'full' , canActivate: [LoginGuardsService] },
  
  // PUBLIC ROUTES
  
  { path: 'home', loadChildren: './public/home/home.module#HomePageModule', canActivate: [LoginGuardsService] },
  { path: 'home/:goSnap', loadChildren: './public/home/home.module#HomePageModule', canActivate: [LoginGuardsService] },
  { path: 'login', loadChildren: './public/login/login.module#LoginPageModule', canActivate: [LoginGuardsService] },
  { path: 'register', loadChildren: './public/register/register.module#RegisterPageModule' , canActivate: [LoginGuardsService] },
  { path: 'register/:snapUserAvatarId/:snapUserId/:snapUserAvatarUrl/:snapUserPseudo', loadChildren: './public/register/register.module#RegisterPageModule' , canActivate: [LoginGuardsService] },
  { path: 'reset-password', loadChildren: './public/reset-password/reset-password.module#ResetPasswordPageModule' },
  { path: 'snap-register', loadChildren: './public/snap-register/snap-register.module#SnapRegisterPageModule' },
  { path: 'snapConnect', redirectTo : "http://localhost:3000/login/snapchat" },
  { path: 'loading-home-page', loadChildren: './public/loading-home-page/loading-home-page.module#LoadingHomePagePageModule' },
  { path: 'password/reset/:userId/:token', loadChildren: './public/confirm-new-password/confirm-new-password.module#ConfirmNewPasswordPageModule' },

  // MEMBERS ROUTES
 
  { path: 'dashboard', loadChildren: './members/dashboard/dashboard.module#DashboardPageModule' },
  { path: 'members', canActivate: [AuthGuard], loadChildren: './members/member-routing/member-routing.module#MemberRoutingModule' },
  { path :'contactDashboard/:user_id', loadChildren : './members/contact-dashboard/contact-dashboard.module#ContactDashboardPageModule', canActivate : [AuthGuard] },
  { path: 'map', loadChildren: './members/map/map.module#MapPageModule', canActivate : [AuthGuard] },
  { path: 'messaging/:user_id', loadChildren: './members/messaging/messaging.module#MessagingPageModule' },
  { path: 'community', loadChildren: './members/community/community.module#CommunityPageModule' },
  { path : 'musicPlayer/:musicId', component : MusicPlayerComponent, canActivate: [AuthGuard] },
  { path: 'messages', loadChildren: './members/messages/messages.module#MessagesPageModule' },
  { path :'contactDashboard/:user_id', loadChildren : './members/contact-dashboard/contact-dashboard.module#ContactDashboardPageModule', canActivate : [AuthGuard] },
  { path: 'about', loadChildren: './members/about/about.module#AboutPageModule', canActivate : [AuthGuard] },
  { path: 'posts', component: PostsComponent , canActivate : [AuthGuard] },
  { path: 'streams', component: StreamsComponent , canActivate : [AuthGuard] },
  {path: 'post/:id', component: CommentsComponent, canActivate: [AuthGuard]},
 








];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'}),
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
