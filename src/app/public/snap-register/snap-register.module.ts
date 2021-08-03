import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FooterModule } from './../_inc/footer/footer.module';

import { SnapRegisterPage } from './snap-register.page';

const routes: Routes = [
  {
    path: '',
    component: SnapRegisterPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FooterModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SnapRegisterPage]
})
export class SnapRegisterPageModule {}
