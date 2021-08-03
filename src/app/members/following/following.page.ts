import { Component, OnInit } from '@angular/core';
import {UsersService} from './../../services/users.service';
import * as _ from 'lodash';
import {AuthenticationService } from '../../services/authentication.service';
import * as io from 'socket.io-client';
import { PopoverController, ModalController, ActionSheetController } from '@ionic/angular';

let baseUrl = "myserveradress"

@Component({
  selector: 'app-following',
  templateUrl: './following.page.html',
  styleUrls: ['./following.page.scss'],
})
export class FollowingPage implements OnInit {

  userFollowing : any;
  socket : any;
  loggedInUser : any;
  userArr=[];

  constructor(public modalController: ModalController,
    private usersService : UsersService, 
    private authService : AuthenticationService, 
    public popoverController: PopoverController,
    public actionSheetController: ActionSheetController) { 
    this.socket = io(`${baseUrl}`);
  }

  ngOnInit() {
    this.loggedInUser = this.authService.userData;
    this.getUserFollowing();
    this.getUser();
    this.socket.on('refreshPage', ()=>{
      this.getUserFollowing();
      this.getUser();
    })
  }

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      'dismissed': true
    });
  }

  ///////////////

  getUserFollowing () {
    this.usersService.getUserFollowing().subscribe (data =>{
      this.userFollowing=data.following;
      console.log(this.userFollowing);
    });
  }

  getUser () {
    this.loggedInUser = this.authService.userData;
   // console.log(this.loggedInUser);
    this.usersService.getUserById(this.loggedInUser.id).subscribe (data =>{
      this.userArr=data.result.following;
   // console.log(data);
    });
    console.log(this.loggedInUser)
    console.log(this.loggedInUser.followers);
  }

  followUser(user) {
    console.log(typeof(user._id));
    this.usersService.followUser(user._id).subscribe(data=> {
     // console.log(data);
      this.socket.emit('refresh',{});
    })
  }

  unfollowUser(user){
   // console.log(user);

    this.usersService.unfollowUser(user._id).subscribe(data => {
      console.log(data);
      this.socket.emit('refresh', {});
    });
  }

  async more(user) {
    const actionSheet = await this.actionSheetController.create({
      header: user.username,
      buttons: [{
        text: 'Ne plus suivre',
        handler: () => {
          this.unfollowUser(user)
        }
      },
      {
        text: 'Annuler',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }

}
