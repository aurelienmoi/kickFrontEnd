import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-about-usecase',
  templateUrl: './about-usecase.page.html',
  styleUrls: ['./about-usecase.page.scss'],
})
export class AboutUsecasePage implements OnInit {

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
