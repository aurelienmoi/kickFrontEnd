import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MessageService} from './../../services/message.service';
import {AuthenticationService} from './../../services/authentication.service';
import {UsersService} from './../../services/users.service';
import * as io from 'socket.io-client';
let baseUrl = "myserveradress"
import { ModalController, IonContent, NavParams } from '@ionic/angular';
import { ThrowStmt } from '@angular/compiler';
import * as moment from 'moment';
@Component({
  selector: 'app-messaging',
  templateUrl: './messaging.page.html',
  styleUrls: ['./messaging.page.scss'],
})
export class MessagingPage implements OnInit, AfterViewInit {

  @ViewChild(IonContent, {read: IonContent}) myContent: IonContent;

  username = null;
  receiverName : string;
  userData : any;
  message : string;
  receiverData : any;
  socket : any;
  receiverId: any;
  messagesArray : [];
  typingMessage;
  typing = false;
  dataLoaded : boolean;
  logScrolling : any;
  
  constructor(private modalController : ModalController,
              private navParams: NavParams,
              private route : ActivatedRoute,
              private msgService : MessageService,
              private authService : AuthenticationService,
              private usersService : UsersService ) { 
    this.socket=io(`${baseUrl}`);
    this.dataLoaded = false;
  }

  ngOnInit() {
 
  this.route.params.subscribe(params =>
    {
      this.receiverId= this.navParams.get('user_id');
      console.log(params);
      this.getUserById(this.receiverId);
      this.userData= this.authService.userData;
      this.socket.on('refreshPage', () => {
        this.getUserById(this.receiverId)
      })
    });
    this.socket.on('is_typing', data => {
      if (data.sender == this.receiverName) {
        this.typing = true;
      } 
    })
    moment.locale('fr');
    this.ScrollToBottom(300);
  }

  ScrollToBottom(delay){
    setTimeout(() => {
      this.myContent.scrollToBottom();
   }, delay);
  }

  timeFromNow(time) {
    return moment(time).fromNow();
  }

  timeHm(time) {
    return moment(time).format("HH:mm");
  }

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      'dismissed': true
    });
  }
  
  ngAfterViewInit (){
    const params = {
      room1 : this.userData.username,
      room2 : this.receiverName
    };

    this.socket.emit('join chat', params);
  }

  getUserById(user_id){
    this.usersService.getUserById(user_id).subscribe(data => {
      
      this.receiverData = data.result;
      this.receiverId = this.receiverData._id;
      this.getMessages(this.userData.id, data.result._id);
      this.dataLoaded = true;
    })

    console.log(this.receiverData)
  }

  getMessages(senderId, receiverId){
    this.msgService.getAllMessages(senderId, receiverId).subscribe(data => {
        this.messagesArray = data.messages.message;
      // for(let i = 0; i<this.messagesArray.length; i++) {
      //   this.messagesArray[i].createdAtFormated = this.timeFromNow(this.messagesArray[i].createdAt);
      //   for(let j = 0; j<i; j++) { 
      //     if (this.messagesArray[i].createdAtFormated == this.messagesArray[j].createdAtFormated)  {
      //       this.messagesArray[i].createdAtFormated = null;
      //     }
      //   }
      // }
    })
  }

  SendMessage(){
    console.log("MESSAGE ENVOYE");
    if (this.message){
    this.msgService.sendMessage(this.userData.id, this.receiverData._id, this.receiverData.username, this.message,this.userData ).subscribe(data => {
      this.message = "";
      this.socket.emit('refresh', {});
    })
  }
  this.ScrollToBottom(1000);
  }
  isTyping(){
    this.socket.emit('start_typing', {
      sender : this.userData.username,
      receiver : this.receiverName
    });
  }
}
