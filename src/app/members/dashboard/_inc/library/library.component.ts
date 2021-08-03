import { UploadMusicPage } from '../../../../members/upload-music/upload-music.page';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsersService } from '../../../../services/users.service'
import { AuthenticationService } from '../../../../services/authentication.service'
import { ActionSheetController, ModalController } from '@ionic/angular';
import * as _ from 'lodash';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss'],
})
export class LibraryComponent implements OnInit, OnDestroy {

  constructor(
    private userService: UsersService,
    private authService: AuthenticationService,
    public actionSheetController: ActionSheetController,
    public modalController: ModalController,
    public http : HttpClient
  ) { }
  id: any;
  pseudo: any;
  libraryTest = [];
  userToken: any;
  emptyMusic : boolean;
  data: any;

  ///////////// IONIC PAGE LIFECYCLE /////////////

  ngOnInit() {
    if (this.authService.userData.id != undefined && this.authService.userData != undefined) {
      this.id = this.authService.userData.id;
      this.pseudo = this.authService.userData.pseudo;
    }
    else (this.authService.getUserByToken().subscribe(data => {
      this.id = data.id

    }))
    this.getMusics();
    this.getLikesByUserId()
  }

  ngOnDestroy() {
    console.log("library destroy");
  }

  getLikesByUserId(){
  //  this.userService.getLikesByUserId(this.id).subscribe(data => {
      
    //  console.log(data.result);
     // console.log("it works :)")
    //})
    console.log("it works !")
  }

  checkInArray(arr, id){
    const result = _.find(arr,  ['userFollowed._id', id]);
    if(result) {
      return true;
    }
    else {
      return false;
    }
  }

  likeMusic(musicId) {

    console.log("Like music process !")
    
    this.data = {
      musicId: musicId
    };

    this.http.post('myserveradress/chatApp/likeMusic', this.data)
    .subscribe(
      (response : any) => {
        console.log(response)
      })
  }

  dislikeMusic(musicId) {

    console.log("Like music process !")
    
    this.data = {
      musicId: musicId
    };

    this.http.post('myserveradress/chatApp/dislikeMusic', this.data)
    .subscribe(
      (response : any) => {
        console.log("zblehh")
      })
  }

  getMusics() {
    this.userService.getUserMusics(this.id).subscribe(data => {
      console.log(data);
      console.log(this.libraryTest.length, data.musics.length);
      let n = 0;
      while (this.libraryTest.length < data.musics.length) {
        this.libraryTest[n] = data.musics[n];
        n++;
      }
      if(this.libraryTest.length ==0) {
        this.emptyMusic= true;
      }
    })
  }

  async presentModalUpload() {
    const modal = await this.modalController.create({
      component: UploadMusicPage
    });

    modal.onDidDismiss().then((dataReturned) => {
      this.getMusics();
    });

    return await modal.present();
  }


  async presentActionSheet() {
    console.log('UI THEMING');
    const actionSheet = await this.actionSheetController.create({
      header: "J'pourrais",
      buttons: [{
        text: 'Supprimer',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          console.log('Delete clicked');
        }
      }, {
        text: 'Partager',
        icon: 'share',
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'Lecture',
        icon: 'arrow-dropright-circle',
        handler: () => {
          console.log('Play clicked');
        }
      }, {
        text: 'Favoris',
        icon: 'heart',
        handler: () => {
          console.log('Favorite clicked');
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }


}


