import { Component, OnInit } from '@angular/core';
import { UsersService } from './../../services/users.service';
import * as _ from 'lodash';
import { AuthenticationService } from '../../services/authentication.service';
import * as io from 'socket.io-client';
let baseUrl = "myserveradress"
import { ModalController, ActionSheetController } from '@ionic/angular';
import { MessagingPage } from './../../members/messaging/messaging.page';
import { Router } from '@angular/router';

@Component({
  selector: 'app-community',
  templateUrl: './community.page.html',
  styleUrls: ['./community.page.scss'],
})
export class CommunityPage implements OnInit {

  users = [];
  socket : any;
  loggedInUser : any;
  userArr=[];

  constructor(public actionSheetController: ActionSheetController, 
              private usersService : UsersService, 
              private authService : AuthenticationService, 
              public modalController: ModalController,
              private router : Router) {
    this.socket = io(`${baseUrl}`);
  }

  ngOnInit() {
    this.loggedInUser = this.authService.userData;
    this.getUsers();
    this.getUser();
    this.socket.on('refreshPage', ()=>{
      this.getUsers();
      this.getUser();
    })
  }

  getUsers () {
    this.usersService.getAllUsers().subscribe (data =>{
      _.remove(data.result, {username : this.loggedInUser.username});
      this.users=data.result;
      console.log(this.users);
  });
  }

  getUser () {
    this.loggedInUser = this.authService.userData;
    console.log(this.loggedInUser);
    this.usersService.getUserById(this.loggedInUser.id).subscribe (data =>{
      this.userArr=data.result.following;
      console.log(data);
    });
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

  followUser(user) {
    console.log(typeof(user._id));
    this.usersService.followUser(user._id).subscribe(data=> {
      console.log(data);
      this.socket.emit('refresh',{});
    })
  }

  unfollowUser(user){
  //  console.log(user);
   
    this.usersService.unfollowUser(user._id).subscribe(data => {
      console.log(data);
      this.socket.emit('refresh', {});
    });
  }

  async presentModalMessaging(usernameEntering) {
    const modal = await this.modalController.create({
      component: MessagingPage,
      componentProps: { 
        username : usernameEntering
      }
    });
    return await modal.present();
  }

  async more(userId, username) {
    const actionSheet = await this.actionSheetController.create({
      header: username,
      cssClass: 'moreCss',
      buttons: [{
        text: 'Messages',
        icon: 'ios-send',
        handler: () => {
          this.presentModalMessaging(username)
        }
      },
      {
        text: 'Annuler',
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
