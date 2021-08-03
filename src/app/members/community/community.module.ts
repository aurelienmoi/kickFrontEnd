import { NavBarModule } from '../_layouts/nav-bar/nav-bar.module';
import { TopToolbarModule } from '../_layouts/top-toolbar/top-toolbar.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CommunityPage } from './community.page';

const routes: Routes = [
  {
    path: '',
    component: CommunityPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    RouterModule.forChild(routes),
    TopToolbarModule,
    NavBarModule
  ],
  declarations: [CommunityPage]
})
export class CommunityPageModule {}
