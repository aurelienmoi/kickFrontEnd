import { OpponentProfilMenuComponent } from './opponent-profil-menu.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MainModule } from '../../../dashboard/_inc/main/main.module';
import { LibraryProfilModule } from '../library-profil/library-profil.module';

@NgModule({
  declarations: [
    OpponentProfilMenuComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    RouterModule,
    MainModule,
    LibraryProfilModule
  ],
  exports: [
    OpponentProfilMenuComponent
  ]
})
export class OpponentProfilMenuModule { }
