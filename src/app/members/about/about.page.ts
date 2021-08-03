import { AboutUsecasePage } from './_inc/about-usecase/about-usecase.page';
import { ModalAboutUsingPage } from './_inc/modal-about-using/modal-about-using.page';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }

  async presentModalTeam() {
    const modal = await this.modalController.create({
      component: ModalAboutUsingPage
    });
    return await modal.present();
  }

  async presentModalUsecase() {
    const modal = await this.modalController.create({
      component: AboutUsecasePage
    });
    return await modal.present();
  }

}
