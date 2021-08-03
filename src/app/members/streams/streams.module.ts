import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { StreamsComponent } from './streams.component';
import { PostsModule } from '../posts/posts.module';

@NgModule({
  declarations: [StreamsComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    RouterModule,
    PostsModule
  ],
  entryComponents: [StreamsComponent],
  exports: [StreamsComponent]
})
export class StreamsModule { }
