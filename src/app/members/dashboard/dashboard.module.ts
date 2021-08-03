import { DashboardMapModule } from './_inc/dashboard-map/dashboard-map.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { DashboardPage } from './dashboard.page';

// Components

import { TopToolbarModule } from '../_layouts/top-toolbar/top-toolbar.module';

import { ProfilMenuModule } from '../contact-dashboard/_inc/profil-menu/profil-menu.module';
import { MainModule } from './_inc/main/main.module';
import { LibraryModule } from './_inc/library/library.module';

import { NavBarModule } from 'src/app/members/_layouts/nav-bar/nav-bar.module';
import { NotificationsModule } from './_inc/notifications/notifications.module';
import { StreamsModule } from '../streams/streams.module';


const routes: Routes = [
  {
    path: '',
    component: DashboardPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    LibraryModule,
    ProfilMenuModule,
    TopToolbarModule,
    MainModule,
    NavBarModule,
    NotificationsModule,
    DashboardMapModule,
    StreamsModule
  ],
  declarations: [
    DashboardPage
  ]
})
export class DashboardPageModule {}
