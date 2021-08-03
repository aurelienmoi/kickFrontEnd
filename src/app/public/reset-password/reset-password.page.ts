import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient} from '@angular/common/http';
let baseURL = "myserveradress";

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.page.html',
  styleUrls: ['./reset-password.page.scss'],
})
export class ResetPasswordPage implements OnInit {

  constructor(private http: HttpClient, private router : Router) { }

  emailPattern = "[A-Za-z0-9._+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})"; // maybe delete % from email patter to a void SQL injections
  resetPassword : any = {}; //necessary to use ngModel in our HTML
  

// TODO : IF THE INPUT IS EMPTY IT TRIGGERS AN ERROR IN NODE THAT CANT BE HANDLDED, NEEDS TO BLOCK THE FORM AS LONG AS IT DOESNT HAVE A VALID EMAIL ENTERED
resetPasswordForm() {
  let data = {
    
    email : this.resetPassword.email
};
  console.log(data);
  this.http.post(`${baseURL}/chatApp/reset-password`,data )
  .subscribe(
    (response : any) => {
   
  

  
   console.log(response);
  });
}

changePassword() {

  let data = this.resetPassword.password

  

}










  ngOnInit() {
  }

}
