import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TopToolbarComponent } from './top-toolbar.component';

@NgModule({
  declarations: [TopToolbarComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    RouterModule,
  ],
  entryComponents: [TopToolbarComponent],
  exports: [TopToolbarComponent]
})
export class TopToolbarModule { }
