import { Component, OnInit } from '@angular/core';
import { TopToolbarComponent } from '../_layouts/top-toolbar/top-toolbar.component';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.page.html',
  styleUrls: ['./messages.page.scss'],
})
export class MessagesPage implements OnInit {

  constructor(private popover : PopoverController) { }

  ngOnInit() {
  }

  async presentPopover(ev: any) {
    const popover = await this.popover.create({
      component: TopToolbarComponent,
      cssClass: 'popoverClass',
      event: ev
    });
    return await popover.present();
  }

}
