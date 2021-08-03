import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

let baseUrl = "myserveradress"
@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http : HttpClient) { }


  addPost(body) : Observable<any>{
    return this.http.post(`${baseUrl}/chatApp/post/addPost`,body)
  }


  getAllPosts(): Observable<any> {
    return this.http.get(`${baseUrl}/chatApp/posts`);
  }

  addLike(body): Observable<any> {
    return this.http.post(`${baseUrl}/chatApp/post/addLike`,body);
  }

  addComment(body): Observable<any> {
    return this.http.post(`${baseUrl}/chatApp/post/addComment`,body);
  }
  getPost(id): Observable<any> {
    return this.http.get(`${baseUrl}/chatApp/posts/${id}`);
  }


}
