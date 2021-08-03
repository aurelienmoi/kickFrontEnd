import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { LibraryProfilComponent } from './library-profil.component';

@NgModule({
  declarations: [
    LibraryProfilComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    RouterModule
  ], exports: [
    LibraryProfilComponent
  ]
})
export class LibraryProfilModule { }
