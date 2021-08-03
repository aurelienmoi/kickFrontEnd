import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MessagingPage } from './messaging.page';
import { TopToolbarModule } from 'src/app/members/_layouts/top-toolbar/top-toolbar.module';
import { NavBarModule } from 'src/app/members/_layouts/nav-bar/nav-bar.module';

const routes: Routes = [
  {
    path: '',
    component: MessagingPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    TopToolbarModule,
    NavBarModule
  ],
  declarations: [MessagingPage]
})
export class MessagingPageModule {}
