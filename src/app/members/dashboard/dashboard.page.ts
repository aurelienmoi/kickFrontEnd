import { TopToolbarComponent } from '../_layouts/top-toolbar/top-toolbar.component';
import { AlertController, IonContent, ModalController, PopoverController } from '@ionic/angular';
import { AuthenticationService } from './../../services/authentication.service';
import { Platform } from '@ionic/angular'
import { Component, OnInit, ViewChild, Injectable } from '@angular/core';
import { FileChooser } from '@ionic-native/file-chooser/ngx';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { from, Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { UsersService } from '../../services/users.service';
import * as io from 'socket.io-client';
import { FollowersPage } from '../followers/followers.page';
import { FollowingPage } from '../following/following.page';
import { Subscription } from 'rxjs';

let baseURL = "myserveradress";
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})

export class DashboardPage implements OnInit {
  rowId: string;
  rowUsername: string;
  rowIsArtist: boolean;
  rowIsBeatmaker: boolean;
  rowBio: string;
  rowRegistrationDate: string;
  userData: any;
  userDataDisplay: any;
  bioForm: any;
  data: any;
  pseudoForm: "Pseudo";
  @ViewChild(IonContent) content: IonContent;
  bitmojiLink: string;
  data2: any;
  socket: any;
  dataLoaded: boolean;
  userAvatar : any;
  /////////// PROFIL MENU COMPONENT
  isOnNotifications: boolean;
  isOnLibrary: boolean;
  isOnMain: boolean;
  constructor(private userService: UsersService,
    private authService: AuthenticationService,
    private fileChooser: FileChooser,
    private transfer: FileTransfer,
    private http: HttpClient,
    public alertController: AlertController,
    private storage: Storage,
    public modalController: ModalController,
    private platform: Platform,
    private popover: PopoverController) {
    this.socket = io(`${baseURL}`);
    this.bitmojiLink = "assets/img/bitmoji.png"
    this.dataLoaded = false;
  }

  ///////////// IONIC PAGE LIFECYCLE /////////////
  ngOnInit() {
    this.socket.on('refreshPage', data => {
      this.updatePseudo()
      this.updateBio();
    })
    if (!this.isOnNotifications && !this.isOnLibrary) {
      this.isOnNotifications = false;
      this.isOnLibrary = false;
      this.isOnMain = true;
    }


  }

  ionViewWillEnter() {
 //   this.getUserAvatar();
    this.getUserData();

  }

  ionViewDidEnter() {

    this.backButtonSub = this.platform.backButton.subscribeWithPriority(
      10000,
      () => { }
    );
  }

  ionViewWillLeave() {
    this.backButtonSub.unsubscribe();
  }

  ionViewDidLeave() { }

  ngOnDestroy() { }

  onNotifications() {
    this.isOnNotifications = true;
    this.isOnLibrary = false;
    this.isOnMain = false;
  }

  onLibrary() {
    this.isOnNotifications = false;
    this.isOnLibrary = true;
    this.isOnMain = false;
  }

  onMain() {
    this.isOnNotifications = false;
    this.isOnLibrary = false;
    this.isOnMain = true;
  }

  async presentPopover(ev: any) {
    const popover = await this.popover.create({
      component: TopToolbarComponent,
      cssClass: 'popoverClass',
      event: ev
    });
    return await popover.present();
  }

  async presentModalFollowing() {
    const modal = await this.modalController.create({
      component: FollowingPage
    });
    return await modal.present();
  }

  async presentModalFollowers() {
    const modal = await this.modalController.create({
      component: FollowersPage
    });
    return await modal.present();
  }

  private backButtonSub: Subscription;

  /////////// CHANGE PSEUDO FUNCTIONS ///////////

  async changePseudo() {
    const alert = await this.alertController.create({
      header: 'Modifier le pseudo',
      message: 'C\'est sous ce pseudo que tu apparaitra sur Kick',
      inputs: [
        {
          name: 'pseudo',
          type: 'text',
          id: 'pseudo',
          value: this.userDataDisplay["pseudo"]
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
            this.changePseudoOk(data.pseudo);
          }
        }
      ]
    });

    await alert.present();
  }

  changePseudoOk(pseudo) {
    this.data = {
      pseudoForm: pseudo,
      userId: this.authService.userData.id
    }
    this.userService.changePseudo(this.data).subscribe(
      (res: any) => {

        if (res.token) {
          this.authService.clearToken();
          this.authService.login(res.token, res.expiresIn);
          this.socket.emit('refresh', {});
        } else {
          //MAYBE ADD HERE AN ALERT THAT PSEUDO CANT BE CHANGED
        }
      })
  }
  updateBio() {
    this.userService.getUserById(this.authService.userData.id).subscribe(data => {
      console.log(data);
      this.userDataDisplay.bio = data.result.bio;
      this.authService.userData.bio = data.result.bio;
    }
    )
  }
  updatePseudo() {
    this.userService.getUserById(this.authService.userData.id).subscribe(data => {
      console.log(data);
      this.userDataDisplay.pseudo = data.result.pseudo;
      this.authService.userData.pseudo = data.result.pseudo;
    }
    )
  }

  /////////// CHANGE BIO FUNCTIONS ///////////

  async changeBio() {
    const alert = await this.alertController.create({
      header: 'Modifier la bio',
      message: 'Ta bio apparaitra sur ton profil lorsqu\'un utilisateur se rendra sur ton profil',
      inputs: [
        {
          name: 'bio',
          type: 'text',
          id: 'bio',
          value: this.userDataDisplay["bio"]
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
            this.changeBioOk(data.bio);
          }
        }
      ]
    });

    await alert.present();
  }

  changeBioOk(bio) {
    this.data = {
      bioForm: bio,
      userId: this.authService.userData.id
    }
    this.userService.changeBio(this.data).subscribe(
      (res: any) => {
        if (res.token) {
          this.authService.clearToken();
          this.authService.login(res.token, res.expiresIn);
          this.socket.emit('refresh', {});
        } else {
          // ADD HERE MAYBE AN ALERT THAT BIO HASNT BEEN CHANGED
        }
      })
  }

  // OTHER FUNCTIONS

  loginDataStorage(rowId, rowUsername, rowIsArtist, rowIsBeatmaker, rowBio, rowRegistrationDate, following, followers, pseudo, roles) {
    var loginData = {
      "id": rowId, "username": rowUsername, "isArtist": rowIsArtist, "isBeatmaker": rowIsBeatmaker, "bio": rowBio, "registrationDate": rowRegistrationDate, "following": following, "followers": followers, "pseudo": pseudo
      , "roles": roles
    };
    this.userData = loginData;
    this.userDataDisplay = loginData;
    this.dataLoaded = true;
  }

  getUserData() {
    let data = "vide"; // this request will be intercepted and the token will be added automatically so we dont need to put it here

    this.http.post(`${baseURL}/testToken`, data).subscribe(
      (res: any) => {
        if (res.loggedIn !== true) {
          this.logout();
        }
        else {
          console.log(res);
          this.userAvatar= `myserveradress/chatApp/getUserAvatar/${res.id}`
          this.loginDataStorage(res.id, res.username, res.isArtiste, res.isBeatmaker, res.bio, res.registrationDate, res.following, res.followers, res.pseudo, res.roles);
        }
      });
  }


  logout() {
    this.authService.logout();
  }

  chooseFile() {
    this.fileChooser.open()
      .then(uri => console.log(uri))
      .catch(e => console.log(e));
  }

  chooseAvatar() { // Android Only

    this.storage.get("ACCES_TOKEN").then(res => {
      if (res) {

        const fileTransfer: FileTransferObject = this.transfer.create();

        let options: FileUploadOptions = {
          fileKey: 'avatar',   //this key must be the same as the name in nodejs
          fileName: 'CustomFile',
          headers: {
            'avatarName': 'myAvatar',
            'x-access-token': res
          }
        }

        this.fileChooser.open({ "mime": "image/jpeg" })
          .then(uri => fileTransfer.upload(uri, `${baseURL}/chatApp/changeAvatar`, options)
            .then((data) => {
              alert(data + "avatar uploadé avec succes")
            }, (err) => {
              alert("erreur pendant le traitement de votre image, merci de choisir un fichier au format jpeg")
            }))
      }
      else {
        alert("une erreur est survenue pendant le transfert de votre image, merci de vous reconnecter");
        this.authService.logout();
      }
    


    })
}


}
