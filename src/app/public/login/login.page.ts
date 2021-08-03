import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthenticationService } from './../../services/authentication.service';

let baseURL = "myserveradress";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})



export class LoginPage implements OnInit {

  rowUsername: string;
  rowEmail: string;
  rowIsArtist: boolean;
  rowIsBeatmaker: boolean;
  rowBio: string;
  rowRegistrationDate: string;
  rowRegistrationDateTime: string;
  rowId: string;
  following: any;
  followers: any;
  pseudo: string;
  // PAGE MAKER

  pageTitle: string;

  slogan: string;

  resetPassMsg: string;
  resetPassLink: string;

  // Inputs

  usernameInput: string;
  passwordInput: string;
  loginBtn: string;
  roles: any
  // Input patterns

  usernamePattern = "[A-Za-z0-9_-]{5,20}";
  passwordPattern = "^([a-zA-Z0-9@*#.!]{7,40})$";

  // Input Messages

  usernameMsg: string;
  emailMsg: string;
  passwordMsg: string;

  // ON FOCUS

  usernameOnFocus: boolean;
  passwordOnFocus: boolean;

  // Loading

  onLoading: boolean;

  wrongLogin: boolean;
  wrongLoginMsg: string;

  constructor(private http: HttpClient,
    private router: Router,
    private authService: AuthenticationService) {
    this.pageTitle = "Connexion";

    this.slogan = "Bon retour parmi-nous";

    this.usernameInput = "Nom d'utilisateur";
    this.passwordInput = "Mot de passe";
    this.loginBtn = "Connexion";
    this.resetPassLink = "Mot de passe oublié ?"

    this.passwordMsg = "7 à 40 caractères";
    this.usernameMsg = "5 à 20 caractères";


    this.wrongLogin = false;
    this.onLoading = false;
    this.wrongLoginMsg = "Identifiants incorrects";
  }


  loginForm: any = {}; //nécessaire pour utiliser nGmodel dans la page html A REMETTRE 
  wrongLogs = false;

  usernameInpFoc() {
    this.usernameOnFocus = true;
    this.wrongLogin = false;
  }
  usernameInpBlur() {
    this.usernameOnFocus = false;
  }
  passwordInpFoc() {
    this.passwordOnFocus = true;
    this.wrongLogin = false;
  }
  passwordInpBlur() {
    this.passwordOnFocus = false;
  }



  //------------------------------------------------------------------Login function--------------------------------------------------------
  login() {

    this.onLoading = true;

    let data = {
      username: this.loginForm.username,
      password: this.loginForm.password
    };

    // this.authService.logout(); If token isn't removed, add this line

    this.http.post(`${baseURL}/chatApp/login`, data)
      .subscribe(
        (response: any) => {
          console.log(response);

          if (response.loggedIn === true) {

            this.rowUsername = response.username;
            this.rowIsArtist = response.isArtiste;
            this.rowIsBeatmaker = response.isBeatmaker;
            this.rowBio = response.bio;
            this.rowRegistrationDate = response.registrationDate;
            this.rowId = response.id;
            this.following = response.following;
            this.followers = response.followers;
            this.pseudo = response.pseudo;
            this.roles = response.roles;

            console.log("POST call successful value returned in body", response);
            let token = response.token;
            let expiresIn = response.expiresIn;
            this.authService.login(token, expiresIn);
            this.authService.loginDataStorage(this.rowUsername, this.rowIsArtist, this.rowIsBeatmaker, this.rowBio, this.rowRegistrationDate, this.rowId, this.following, this.followers, this.pseudo, this.roles)
            setTimeout(() => { this.router.navigateByUrl('/members/dashboard'); }, 2500);
          }
          else {
            this.wrongLogs = true;
          }
        }, (err) => {
          setTimeout(() => { this.onLoading = false; this.wrongLogin = true; }, 2500);
        }
      );
  }

  checkTokenTest() {
  }

  ngOnInit() {
  }

}
