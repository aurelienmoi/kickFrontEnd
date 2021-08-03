import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { PostService } from 'src/app/services/post.service';
import * as moment from 'moment';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
})
export class CommentsComponent implements OnInit {

  comment : any = {};
  postId:any;
  post : string;
  commentsArray = [];
  commentForm: FormGroup;
  constructor(private postService : PostService, private activatedRoute: ActivatedRoute, private authService : AuthenticationService,private fb : FormBuilder) { }

  ngOnInit() {
    this.postId= this.activatedRoute.snapshot.paramMap.get('id');
    this.comment.username = this.authService.userData.username;
    this.getPost();
    this.commentForm = this.fb.group({
      comment: ['', Validators.required]
    });
  }

  addComment(){
    let body = {
      username :this.authService.userData.username,
      comment : this.commentForm.value.comment,
      postId : this.postId
    }
    this.postService.addComment(body).subscribe(data => {
      console.log(data)
    })
    this.getPost();
  }

  getPost(){
    this.postService.getPost(this.postId).subscribe(data => {
      console.log(data)
      this.commentsArray= data.post.comments;
      this.post = data.post.post
    })
  }
  timeFromNow(time){
    return moment(time).fromNow();
  }

}
