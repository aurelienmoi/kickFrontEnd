import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { TopToolbarModule } from '../_layouts/top-toolbar/top-toolbar.module';
import { CommentsComponent } from './comments.component';
import { IonicModule } from '@ionic/angular';
@NgModule({
  declarations: [CommentsComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule,
    TopToolbarModule,
    ReactiveFormsModule
  ],
  exports:[CommentsComponent]
})
export class CommentsModule { }
