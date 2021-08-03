import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

let baseURL = "myserveradress";
@Component({
  selector: 'app-confirm-new-password',
  templateUrl: './confirm-new-password.page.html',
  styleUrls: ['./confirm-new-password.page.scss'],
})


export class ConfirmNewPasswordPage implements OnInit {
  newPassword: any = {}; //necessary to use ngModel in our HTML
  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  ngOnInit() {

  }

  confirmNewPassword() {
    let data = {

      password: this.newPassword.password
    }
    this.route.params.subscribe(params => {
      console.log(params);
      let userId = params.userId;
      let token= params.token;
      this.http.post(`${baseURL}/chatApp/receive_new_password/${userId}/${token}`, data)
        .subscribe(
          (response: any) => {




            alert(response);
          });
    })

  }
}