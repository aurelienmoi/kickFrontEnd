import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-opponent-profil-menu',
  templateUrl: './opponent-profil-menu.component.html',
  styleUrls: ['./opponent-profil-menu.component.scss'],
})
export class OpponentProfilMenuComponent implements OnInit {

  isOnNotifications : boolean;
  isOnLibrary : boolean;
  isOnMain : boolean;

  constructor() { 
    if (!this.isOnNotifications && !this.isOnLibrary) {
      this.isOnNotifications = false;
      this.isOnLibrary = false;
      this.isOnMain = true;
    }
  }

  ngOnInit() {}

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

}
