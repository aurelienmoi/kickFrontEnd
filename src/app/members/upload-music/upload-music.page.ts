import { Component, OnInit } from '@angular/core';
import { FileChooser } from '@ionic-native/file-chooser/ngx';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { Storage } from '@ionic/storage';
import { NavParams, ModalController } from '@ionic/angular';

const TOKEN_KEY = 'ACCES_TOKEN'
let baseURL = "myserveradress";

@Component({
  selector: 'app-upload-music',
  templateUrl: './upload-music.page.html',
  styleUrls: ['./upload-music.page.scss'],
})
export class UploadMusicPage implements OnInit {

  constructor(private fileChooser: FileChooser,
              private transfer: FileTransfer,
              private storage: Storage,
              public navParams: NavParams, 
              public modalController: ModalController) 
  {
    this.onLoading = false;
  }

  ngOnInit() {
    this.wrongForm = false;
    this.wrongFormMsg = "Séléctionne un fichier mp3 !";

    this.wrongTitle = false;
    this.wrongTitleMsg = "Erreur - Choisis un titre !";
  }
  userToken:any;
  uri:any;
  title:string;

  // Wrong form

  wrongForm : boolean;
  wrongFormMsg : string;
  wrongTitle : boolean;
  wrongTitleMsg : string;
  fileAdded : boolean;
  onLoading : boolean;
  successfull : boolean;

  inpFocus() {
    this.wrongTitle = false;
  }

  btnFocus() {
    this.wrongForm = false;
  }

  ///////////////////// UPLOAD /////////////////////

  upload() { // Android Only
    this.fileChooser.open()
      .then(uri => {
        this.uri = uri
        if (this.uri != null ) {
          this.fileAdded = true;
          console.log(this.fileAdded);
        } else {
          this.fileAdded = false;
          console.log(this.fileAdded);
        }
      })
    this.btnFocus();
  }

  submitForm() {

    this.onLoading = true;

    if (this.title) {
      this.storage.get(TOKEN_KEY).then(res => {
        if (res && this.title) {
          this.userToken = res;
          const fileTransfer: FileTransferObject = this.transfer.create();
  
          let options: FileUploadOptions = {
            fileKey: 'track',   //this key must be the same as the name in nodejs
            fileName: 'CustomFile',
            headers: {
              'musicName': this.title,
              'x-access-token': res
            }
          }
  
          console.log(this.title);
  
          fileTransfer.upload(this.uri, `${baseURL}/tracks`, options)
              .then((data) => {
                this.onLoading = false;
                this.successfull = true;
              }, (err) => {
                this.wrongForm=true;
                this.onLoading = false;
                this.successfull = false;
              })
        }
      })
    } else {
      this.wrongTitle = true;
      this.onLoading = false;
    }
    setTimeout(() => { this.onLoading=false; }, 2500);
  }

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      'dismissed': true
    });
  }

}
