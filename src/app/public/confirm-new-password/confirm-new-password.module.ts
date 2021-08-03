import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ConfirmNewPasswordPage } from './confirm-new-password.page';

const routes: Routes = [
  {
    path: '',
    component: ConfirmNewPasswordPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ConfirmNewPasswordPage]
})
export class ConfirmNewPasswordPageModule {}
