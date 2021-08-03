import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PostsComponent } from './posts.component';
import { IonicModule } from '@ionic/angular';
import {CommentsModule} from '../comments/comments.module'
@NgModule({
  declarations: [PostsComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    IonicModule,
    ReactiveFormsModule,
    CommentsModule
  ],
  exports: [PostsComponent]
})
export class PostsModule { }
