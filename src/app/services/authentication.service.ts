import { Platform } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
const TOKEN_KEY = 'ACCES_TOKEN'; // is it rlly safe to have this here?

let baseUrl = "myserveradress"
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  refreshAccessToken() {
    throw new Error("Method not implemented.");
  }
  rowUsername : string;
  rowIsArtist : boolean;
  rowIsBeatmaker : boolean;
  rowBio : string;
  rowRegistrationDate : string;
  userData : any;
  dataExists = 0;

  authenticationState = new BehaviorSubject(false);
 
  constructor(private storage: Storage, private plt: Platform, private http : HttpClient ) { 
    this.plt.ready().then(() => {
     this.checkToken();
    });
  }
 
  checkToken() { //add a check expired in  interceptor if we want it to expire
    this.storage.get(TOKEN_KEY).then(res => {
      if (res) {
        console.log(res);
         this.authenticationState.next(true);
                     
      }
    })
  }


  clearToken() {
    this.storage.clear();
  }

  login(token,expiresIn) {
    this.storage.set("ExpiresIn", expiresIn)
    return this.storage.set(TOKEN_KEY, token).then(() => {
      this.authenticationState.next(true);

      this.checkToken();
    });
  }
 
  logout() {
    return this.storage.remove(TOKEN_KEY).then(() => {
      this.authenticationState.next(false);
    });
  }
 
  isAuthenticated() {
    return this.authenticationState.value;
  }


  loginDataStorage(rowUsername,rowIsArtist,rowIsBeatmaker,rowBio,rowRegistrationDate,rowId,following,followers,pseudo,roles) {
    var loginData = { "username" : rowUsername, "isArtist": rowIsArtist, "isBeatmaker" : rowIsBeatmaker, "bio" : rowBio, "registrationDate" : rowRegistrationDate, "id" : rowId, "following" : following, "followers" : followers, "pseudo" : pseudo,"roles": roles };
    this.userData = loginData;
    console.log("ici le loginData",loginData);
  }

  // dashboardDataStorage() {
  //   return this.loginData;
  // }
  getUserByToken() : Observable<any> {
    let data ="vide"
    return this.http.post(`${baseUrl}/testToken`,data);
  }
  
  verifyToken() {

    let data = "vide"; // this request will be intercepted and the token will be added automatically so we dont need to put it here


     this.http.post(`${baseUrl}/testToken`,data).subscribe ( 
     (res : any) => {  

     console.log(res);
     if (res.loggedIn != true){
      console.log(res);
      this.logout();

     }
     else {
       // this.authenticationState.next(true);  why is this line still here ? :D
       console.log(res);
       this.loginDataStorage(res.username,res.isArtiste,res.isBeatmaker,res.bio,res.registrationDate,res.id,res.following,res.followers,res.pseudo,res.roles);
       this.dataExists= 1;
     }
   });
  }
  
}
  
/** ------------- SI LE SCREEN FLASH AU DEMARAGE 
 * 
 *  
 * 
 * t was pretty easy. Here is my solution worked for me. Hope this help others. @Simon I apologies for repeatedly posting on this topic.

1. In authentication.service.ts - Initialize BehaviorSubject with null value instead of false by default.

authenticationState = new BehaviorSubject(null);

.....
....

2. In check token function add else part and change value to false if token not found.

checkToken() {
this.storage.get(TOKEN_KEY).then(res => {
if (res) {
this.authenticationState.next(true);
} else {
this.authenticationState.next(false);
}
})
}

3. app.component.ts - remove else part and update condition like below.

this.authenticationService.authenticationState.subscribe(state => {
if (state) {
this.router.navigate(['members', 'dashboard']);
} 
if(state == false) {
this.router.navigate(['login']);
}
});
*/
