import { Component, OnInit, Input } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-about-using',
  templateUrl: './modal-about-using.page.html',
  styleUrls: ['./modal-about-using.page.scss'],
})
export class ModalAboutUsingPage implements OnInit {

  constructor(navParams: NavParams, public modalController: ModalController) { }

  ngOnInit() {
  }

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      'dismissed': true
    });
  }

}
