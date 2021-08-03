import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

let baseUrl = "myserveradress"

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private  http : HttpClient) { }

  sendMessage(senderId, receiverId, receiverName, message,user) : Observable<any> {
    return this.http.post(`${baseUrl}/chatApp/chat-messages/${senderId}/${receiverId}`,  {
      user,
      receiverId,
      receiverName,
      message
    })
  }


  getAllMessages(senderId, receiverId) : Observable<any> {
    return this.http.get(`${baseUrl}/chatApp/chat-messages/${senderId}/${receiverId}`)
  }

  getUserConversations() : Observable<any> {
    return this.http.get(`${baseUrl}/chatApp/chat-messages/getUserConversations`)
  }







}
