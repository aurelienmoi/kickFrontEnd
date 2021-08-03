import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-snap-register',
  templateUrl: './snap-register.page.html',
  styleUrls: ['./snap-register.page.scss'],
})
export class SnapRegisterPage implements OnInit {

  // PATTERN INPUT
  register : any = {}; //nécessaire pour utiliser nGmodel dans la page html
  pseudoPattern = ".{2,25}";
  emailPattern = "[A-Za-z0-9._+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})"; // maybe delete % from email patter to a void SQL injections
  usernamePattern = "[A-Za-z0-9_-]{5,20}";
  passwordPattern = "^([a-zA-Z0-9@*#.!]{7,40})$";
  passwordConfirmPattern = "^([a-zA-Z0-9@*#.!]{7,40})$";

  // PAGE MAKER

  pageTitle : string;

  slogan : string;

  // INPUTS

  pseudoInput : string;
  usernameInput : string;
  emailInput : string;
  emailConfirmInput : string;
  passwordInput : string;
  passwordConfirmInput : string;
  loginBtn : string;

  passwordMatches : boolean;

  // Input Messages

  pseudoMsg : string;
  usernameMsg : string;
  emailMsg : string;
  passwordMsg : string;

  // ON FOCUS

  pseudoOnFocus : boolean;
  usernameOnFocus : boolean;
  emailOnFocus : boolean;
  passwordOnFocus : boolean;

  // ABOVE SUMBIT

  signupMsg : string;
  signupLink : string;

  constructor(private http: HttpClient, private router : Router, private alertController : AlertController) {
    this.pageTitle="Inscription";

    this.slogan = "Plus qu'une petite étape...";

    this.pseudoInput="Blaze"
    this.usernameInput="Nom d'utilisateur"
    this.emailInput="Email";
    this.emailConfirmInput="Confirmer";
    this.passwordInput="Mot de passe";
    this.passwordConfirmInput="Confirmer";

    this.pseudoMsg = "2 à 25 caractères. Tous caractères acceptés";
    this.passwordMsg = "7 à 40 caractères. Caractères spéciaux acceptés";
    this.emailMsg = "example@email.com";
    this.usernameMsg = "5 à 20 caractères. Chiffres et underscore autorisés";

    this.loginBtn="Inscription";

    this.signupMsg = "En cliquant sur inscription, je reconnait avoir lu et approuvé les";
    this.signupLink = "Conditions Générales d'Utilisation";
  }

  registerForm(){

  console.log(this.register.email);

    let data = {
        username: this.register.username,
        email : this.register.email,
        password : this.register.password
    };

    this.http.post('myserveradress/chatApp/registerMongoDB', data)
    .subscribe(
      (response : any) => {
      
      if (response.registeredIn === true) {
  
        this.presentAlert("Inscription réussie!","","Vous pouvez désormais vous connecter sur kickapp")
        console.log('Operation validee', response.registeredIn);
        this.router.navigate(['login']);
      }
  
      else if (response.emailAlreadyExisting ===true) {

      this.presentAlert("Inscription refusée",'',"Email déja existant");
      console.log("email deja existant");
      //TODO ADD A MESSAGE THAT POPS TO SAY TO THE CLIENT EMAIL ALREADY  EXISTING
      // TODO ADD A MESAGE IF USERNAME ALREADY TAKEN?

      }
      else if (response.usernameAlreadyExisting === true) {
        this.presentAlert("Inscription refusée",'',"Nom d'utillisateur déja existant");
      }
      console.log(response);
    }, (err) => {
      alert ("erreur lors de l'inscription")
    });
  }

  presentAlert(header,subHeader,message,) {
    const alert = document.createElement('ion-alert');
    alert.header = header;
    alert.subHeader = subHeader;
    alert.message = message;
    alert.buttons = ['OK'];
  
    document.body.appendChild(alert);
    return alert.present();
  }

  pseudoInpFoc() {
    this.pseudoOnFocus = true;
  }
  pseudoInpBlur() {
    this.pseudoOnFocus = false;
  }
  usernameInpFoc() {
    this.usernameOnFocus = true;
  }
  usernameInpBlur() {
    this.usernameOnFocus = false;
  }
  emailInpFoc() {
    this.emailOnFocus = true;
  }
  emailInpBlur() {
    this.emailOnFocus = false;
  }
  passwordInpFoc() {
    this.passwordOnFocus = true;
  }
  passwordInpBlur() {
    this.passwordOnFocus = false;
  }
  passwordConfChange () {
    if (this.register.password === this.register.passwordConfirm) {
      this.passwordMatches = true;
    } else {
      this.passwordMatches = false;
    }
  }
  
  ngOnInit() {
  }

}
