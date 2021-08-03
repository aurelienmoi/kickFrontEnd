import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
let baseUrl = "myserveradress"
@Injectable({
  providedIn: 'root'
})
export class UsersService {


  constructor(private http: HttpClient) { }

  getLikesByUserId(id): Observable<any> {
    return this.http.get(`${baseUrl}/chatApp/getUserLikes/${id}`);
  }

  deleteFromPlaylist(data) : Observable<any> {
    return  this.http.post(`${baseUrl}/tracks/deleteFromPlaylist`, data)
  }

  addToPlaylist(data) : Observable<any> {
    return this.http.post(`${baseUrl}/tracks/addToPlaylist`, data);
  }

  changeBio(data) : Observable<any> {
    return this.http.post(`${baseUrl}/chatApp/changeBio`,data)
  }

  changePseudo(data): Observable<any> {
    return this.http.post(`${baseUrl}/chatApp/changePseudo`, data);

  }
  getAllUsers(): Observable<any> {
    return this.http.get(`${baseUrl}/chatApp/users`);
  }
  getUserById(id): Observable<any> {
    return this.http.get(`${baseUrl}/chatApp/users/${id}`);
  }
  getUserByusername(username): Observable<any> {
    return this.http.get(`${baseUrl}/chatApp/users/username/${username}`);
  }

  ///////// FOLLOWS /////////
  followUser(userFollowed): Observable<any> {
    return this.http.post(`${baseUrl}/chatApp/follow-user`, { userFollowed });
  }
  unfollowUser(userFollowed): Observable<any> {
    return this.http.post(`${baseUrl}/chatApp/unfollow-user`, { userFollowed });
  }
  getUserFollowers(): Observable<any> {
    return this.http.get(`${baseUrl}/chatApp/getUserFollowers`);
  }
  getUserFollowing(): Observable<any> {
    return this.http.get(`${baseUrl}/chatApp/getUserFollowing`);
  }


  getUserMusics(id): Observable<any> {
    return this.http.get(`${baseUrl}/chatApp/getUserMusics/${id}`);
  }

  markNotification(id, deleteValue?): Observable<any> {
    return this.http.post(`${baseUrl}/chatApp/mark/${id}`, {
      id,
      deleteValue
    });
  }
  changeEmail(email) : Observable<any>{
    return this.http.post('http://localhost:8080/chatApp/changeEmail',email);
  }
  getUserAvatar() : Observable<Blob>{
    return this.http.get(`${baseUrl}/chatApp/getUserAvatar`,{responseType: "blob"});
  }
}

