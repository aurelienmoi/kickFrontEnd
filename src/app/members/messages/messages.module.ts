import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MessagesPage } from './messages.page';
import { ContactsModule } from './_inc/contacts/contacts.module';
import { ProfilMenuModule } from 'src/app/members/contact-dashboard/_inc/profil-menu/profil-menu.module';
import { TopToolbarModule } from 'src/app/members/_layouts/top-toolbar/top-toolbar.module';
import { MainModule } from 'src/app/members/dashboard/_inc/main/main.module';
import { NavBarModule } from 'src/app/members/_layouts/nav-bar/nav-bar.module';

const routes: Routes = [
  {
    path: '',
    component: MessagesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ContactsModule,
    ProfilMenuModule,
    TopToolbarModule,
    MainModule,
    NavBarModule
  ],
  declarations: [MessagesPage]
})
export class MessagesPageModule {}
