import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profil-menu',
  templateUrl: './profil-menu.component.html',
  styleUrls: ['./profil-menu.component.scss'],
})
export class ProfilMenuComponent implements OnInit {

  isOnNotifications : any;
  isOnLibrary : any;
  isOnMain : any;

  constructor() { 
    if (!this.isOnNotifications && !this.isOnLibrary) {
      this.isOnNotifications = false;
      this.isOnLibrary = false;
      this.isOnMain = true;
    }
  }

  ngOnInit() {}

}