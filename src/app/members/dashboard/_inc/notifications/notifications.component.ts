import { Component, OnInit, OnDestroy } from '@angular/core';
import {AuthenticationService} from '../../../../services/authentication.service';
import * as _ from 'lodash';
import {UsersService} from '../../../../services/users.service';
import * as io from 'socket.io-client';
import * as moment from 'moment';
@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss'],
})
export class NotificationsComponent implements OnInit, OnDestroy {
socket : any;
user : any;
userArr;
notifications = [];

  constructor(private authService : AuthenticationService, private usersService : UsersService) { }

  ngOnInit() {
    this.socket=io("myserveradress");
    this.user = this.authService.userData;
    this.getUser();
    this.socket.on('refreshPage', () => {
      this.getUser();
    })
    moment.locale('fr');
  }

  ngOnDestroy() {
    for(let data of this.notifications) {
      this.markNotification(data)
    }
  }

  followUser(userId) {
    this.usersService.followUser(userId).subscribe(data=> {
      this.socket.emit('refresh',{});
    })
  }

  unfollowUser(userId){
    this.usersService.unfollowUser(userId).subscribe(data => {
      this.socket.emit('refresh', {});
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

  getUser() {
    this.usersService.getUserById(this.user.id).subscribe(data => {
      this.notifications = data.result.notifications.reverse();
      this.userArr=data.result.following;
    });
  }

  timeFromNow(time) {
    return moment(time).fromNow();
  }

  markNotification(data) {
     this.usersService.markNotification(data._id).subscribe( value => {
      this.socket.emit('refresh', {});
    })
    console.log("notification marked !")
  }

  deleteNotification(data){
    this.usersService.markNotification(data._id, true).subscribe( value => {
      this.socket.emit('refresh', {});
    })
  }
}
