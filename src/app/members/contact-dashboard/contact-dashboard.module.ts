import { OpponentProfilMenuModule } from './_inc/opponent-profil-menu/opponent-profil-menu.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ContactDashboardPage } from './contact-dashboard.page';
import { TopToolbarModule } from '../_layouts/top-toolbar/top-toolbar.module';

import { ProfilMenuModule } from './_inc/profil-menu/profil-menu.module';
import { MainModule } from '../dashboard/_inc/main/main.module';

import { NavBarModule } from 'src/app/members/_layouts/nav-bar/nav-bar.module';
import {DashboardMapModule} from '../dashboard/_inc/dashboard-map/dashboard-map.module';
import {LibraryProfilModule} from './_inc/library-profil/library-profil.module';
// module not existing
const routes: Routes = [
  {
    path: '',
    component: ContactDashboardPage
  }
];

@NgModule({
    imports: [
        NavBarModule,
        CommonModule,
        MainModule,
        ProfilMenuModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes),
        TopToolbarModule,
        OpponentProfilMenuModule,
        DashboardMapModule,
        LibraryProfilModule
    ],
  declarations: [ContactDashboardPage]
})
export class ContactDashboardPageModule {}
