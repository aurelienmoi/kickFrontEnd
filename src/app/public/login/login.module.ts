import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';


import { IonicModule } from '@ionic/angular';

import { LoginPage } from './login.page';
import { FormsModule } from '@angular/forms';
import { FooterModule } from './../_inc/footer/footer.module';


const routes: Routes = [
  {
    path: '',
    component: LoginPage
  },
 
];

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    FooterModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LoginPage]
})
export class LoginPageModule {}
