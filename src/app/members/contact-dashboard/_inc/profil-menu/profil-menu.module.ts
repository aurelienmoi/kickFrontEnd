import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ProfilMenuComponent } from './profil-menu.component';
import { MainModule } from '../../../dashboard/_inc/main/main.module';
import { LibraryModule } from 'src/app/members/dashboard/_inc/library/library.module';
import { ContactsModule } from 'src/app/members/messages/_inc/contacts/contacts.module';
import { NotificationsModule } from '../../../dashboard/_inc/notifications/notifications.module';

@NgModule({
  declarations: [
    ProfilMenuComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    RouterModule,
    MainModule,
    ContactsModule,
    LibraryModule,
    NotificationsModule
  ],
  exports: [
    ProfilMenuComponent
  ]
})
export class ProfilMenuModule { }
