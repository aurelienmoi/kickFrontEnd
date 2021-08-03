import { Component, OnInit } from '@angular/core';
import {UsersService} from '../../../../services/users.service';
import * as _ from 'lodash';
import {AuthenticationService } from '../../../../services/authentication.service';
import {MessageService } from '../../../../services/message.service';
import * as io from 'socket.io-client';

let baseUrl = "myserveradress"
import { PopoverController, ModalController } from '@ionic/angular';
import { MessagingPage } from 'src/app/members/messaging/messaging.page';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
})
export class ContactsComponent implements OnInit {

  users = [];
  socket : any;
  loggedInUser : any;
  userArr=[];

  constructor(private messageService : MessageService, public modalController: ModalController,private usersService : UsersService, private authService : AuthenticationService, public popoverController: PopoverController) {
    this.socket = io(`${baseUrl}`);
  }

  ngOnInit() {
    this.loggedInUser = this.authService.userData;
    this.getUserConversations();
    this.getUser();
    this.socket.on('refreshPage', ()=>{
      this.getUserConversations();
      this.getUser();
    })
  }

  async presentModalMessaging(userId) {
    const modal = await this.modalController.create({
      component: MessagingPage,
      componentProps: { 
        user_id : userId
      }
    });
    return await modal.present();
  }

  getUserConversations () {
    this.messageService.getUserConversations().subscribe (data =>{
      this.users = [];
      for (let i = 0; i < data.result.length; i++) {
        this.users.push({_id : data.result[i]._id, pseudo : data.result[i].pseudo, lastMessage : data.lastMessage[i]});
      }
      console.log(this.users)
  });
  }

  getUser () {
    this.loggedInUser = this.authService.userData;
   // console.log(this.loggedInUser);
    this.usersService.getUserById(this.loggedInUser.id).subscribe (data =>{
      this.userArr=data.result.following;
   // console.log(data);
    });
  }

  followUser(user) {
    console.log(typeof(user._id));
    this.usersService.followUser(user._id).subscribe(data=> {
     // console.log(data);
      this.socket.emit('refresh',{});
    })
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

  unfollowUser(user){
   // console.log(user);

    this.usersService.unfollowUser(user._id).subscribe(data => {
      console.log(data);
      this.socket.emit('refresh', {});
    });
  }

}