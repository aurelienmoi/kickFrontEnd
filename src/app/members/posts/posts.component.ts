import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import * as moment from 'moment';
import { some } from 'lodash';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  posts = [];
  user: any;
  postForm: FormGroup;

  constructor(private postService: PostService, private authService: AuthenticationService, private router: Router,private fb: FormBuilder) {

  }

  ngOnInit() {
    this.getAllPosts();
    this.user = this.authService.userData
    this.init()
  }


  getAllPosts() {
    this.postService.getAllPosts().subscribe(data => {
      this.posts = data.posts
    })
  }
  init() {
    this.postForm = this.fb.group({
      post: ['', Validators.required]
    });
  }
  timeFromNow(time) {
    return moment(time).fromNow();
  }
  likePost(post) {
    this.postService.addLike(post).subscribe(data => {
      console.log(data)
      this.getAllPosts()
    })
  }
  checkInLikesArray(arr, username) {
    return some(arr, { username: username })
  }

  openCommentBox(post) {
    this.router.navigate(['post', post._id])
  }

  
  submitPost(){


    let body = {
      username :this.authService.userData.username,
      postForm : this.postForm.value.post
    }
    console.log(this.postForm)
    this.postService.addPost(body).subscribe(data => {
      console.log(data);
      this.getAllPosts()
    });
  }

}
