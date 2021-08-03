import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {

  constructor(navParams: NavParams, public modalController: ModalController, public alertController : AlertController) { }

  ngOnInit() {
  }

  async changePseudo() {
    const alert = await this.alertController.create({
      header: 'Modifier le pseudo',
      message: 'C\'est sous ce pseudo que tu apparaitra sur Kick',
      inputs: [
        {
          name: 'pseudo',
          type: 'text',
          id: 'pseudo',
          value: "Tommix la Trix"
        }
      ],
      buttons: [
        {
          text: 'Retour',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: data => {
            console.log('Confirm Ok');
            // this.changePseudoOk(data.pseudo);
          }
        }
      ]
    });

    await alert.present();
  }

  async changeEmail() {
    const alert = await this.alertController.create({
      header: 'Modifier l\'email',
      message: 'Attention, la modification de l\'email entrainera une nécéssité de confirmer à nouveau l\'email',
      inputs: [
        {
          name: 'email',
          type: 'email',
          id: 'email',
          placeholder: "sheepbild@gmail.com"
        },
        {
          name: 'password',
          type: 'password',
          id: 'password',
          placeholder: "Mot de passe"
        }
      ],
      buttons: [
        {
          text: 'Retour',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: data => {
            console.log('Confirm Ok');
            console.log(data.email);
          }
        }
      ]
    });

    await alert.present();
  }

  async changePhone() {
    const alert = await this.alertController.create({
      header: 'Modifier le numéro',
      message: 'Attention, ce numéro est utilisé pour sécuriser votre compte !',
      inputs: [
        {
          name: 'tel',
          type: 'tel',
          id: 'tel',
          placeholder: "0781937758"
        },
        {
          name: 'password',
          type: 'password',
          id: 'password',
          placeholder: "Mot de passe"
        }
      ],
      buttons: [
        {
          text: 'Retour',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: data => {
            console.log('Confirm Ok');
          }
        }
      ]
    });

    await alert.present();
  }

  async changePassword() {
    const alert = await this.alertController.create({
      header: 'Modifier le mot de passe',
      message: 'Veillez à choisir un mot de passe fort et différent des autres plateformes que vous utilisez !',
      inputs: [
        {
          name: 'actualPassword',
          type: 'password',
          id: 'actualPassword',
          placeholder: "Mot de passe actuel"
        },
        {
          name: 'newPassword',
          type: 'password',
          id: 'newPassword',
          placeholder: "Nouveau mot de passe"
        },
        {
          name: 'newPasswordConfirm',
          type: 'password',
          id: 'newPasswordConfirm',
          placeholder: "Confirmer le mot de passe"
        }
      ],
      buttons: [
        {
          text: 'Retour',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: data => {
            console.log('Confirm Ok');
          }
        }
      ]
    });

    await alert.present();
  }

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      'dismissed': true
    });
  }
  
}
