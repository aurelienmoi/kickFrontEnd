import { Component, OnInit } from '@angular/core';
import {UsersService} from './../../services/users.service';
import * as _ from 'lodash';
import {AuthenticationService } from '../../services/authentication.service';
import * as io from 'socket.io-client';

let baseUrl = "myserveradress"
import { PopoverController, ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-followers',
  templateUrl: './followers.page.html',
  styleUrls: ['./followers.page.scss'],
})
export class FollowersPage implements OnInit {

  userFollowers = [];
  socket : any;
  loggedInUser : any;
  userArr=[];

  constructor(navParams: NavParams, public modalController: ModalController,private usersService : UsersService, private authService : AuthenticationService, public popoverController: PopoverController) { 
    this.socket = io(`${baseUrl}`);
  }

  ngOnInit() {
    this.loggedInUser = this.authService.userData;
    this.getUserFollowers();
    this.getUser();
    // this.getUsers();
    this.socket.on('refreshPage', ()=>{
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
  

  getUserFollowers () {
    this.usersService.getUserFollowers().subscribe (data =>{
      this.userFollowers = data.followers;
      console.log(this.userFollowers);
    });
  }

  getUser () {
    this.loggedInUser = this.authService.userData;
   // console.log(this.loggedInUser);
    this.usersService.getUserById(this.loggedInUser.id).subscribe (data =>{
      this.userArr=data.result.following;
 //     console.log(data);
    });
    console.log(this.loggedInUser)
  }

  followUser(user) {
    console.log(typeof(user._id));
    this.usersService.followUser(user._id).subscribe(data=> {
     // console.log(data);
      this.socket.emit('refresh',{});
    })
  }

  unfollowUser(user){
    this.usersService.unfollowUser(user._id).subscribe(data => {
      console.log(data);
      this.socket.emit('refresh', {});
    });
  }

}

