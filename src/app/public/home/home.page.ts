import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx'

@Component({ 
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  slogan : string;
  loginBtn : string;
  signUpMsg : string;
  signUpLink : string;

  snapUserId : string;
  snapUserAvatarId : string;
  snapUserAvatarUrl : string;
  snapUserPseudo:string;

  goSnap : string;
  
  constructor(private router : Router,
              private http: HttpClient,
              private iab : InAppBrowser,
              private route : ActivatedRoute ){
    this.slogan = "Rejoins la plus grande communauté rap de France !";
    this.loginBtn = "Connexion";
    this.signUpMsg = "Tu n'as pas encore de compte ?";
    this.signUpLink = "Inscription";

    this.snapUserAvatarId = "BABABA";
    this.snapUserId = "";
    this.snapUserAvatarUrl = "https://sdk.bitmoji.com/render/panel/78d0f964-d545-475a-8fc2-272aeb2189ae-AXIwMG5qnDe4DPtH2X6PB2o58Bk~jg-v1.png?transparent=1&palette=1";
    this.snapUserPseudo = "Kick France";
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params =>
      {
        this.goSnap = params.get('goSnap')
        if(this.goSnap == "connectSnap") {
          this.connectSnap();
        }
      });
  }


connectSnap() {
  console.log("button ok")

  const browser = this.iab.create("myserveradress/login/snapchat", "_system", 'hideurlbar=yes') //location=yes 

  browser.on("loadstop").subscribe(e => {

  if(e.url.indexOf("snapRegister") > -1) {
 
      this.snapUserId= e.url.substring(e.url.indexOf("userId=") + 7,e.url.indexOf("userAvatarId=")-1);
      this.snapUserAvatarId = e.url.substring(e.url.indexOf("userAvatarId=") + 13,e.url.indexOf("userAvatarUrl=")-1);
      this.snapUserAvatarUrl = e.url.substring(e.url.indexOf("userAvatarUrl=") + 14, e.url.indexOf("userPseudo=")-1);
      this.snapUserPseudo = e.url.substring(e.url.indexOf("userPseudo=")+11);

      this.snapUserAvatarId = decodeURIComponent(this.snapUserAvatarId)
      this.snapUserId = decodeURIComponent(this.snapUserId)
      this.snapUserAvatarUrl = decodeURIComponent(this.snapUserAvatarUrl)
      this.snapUserPseudo= decodeURIComponent(this.snapUserPseudo) // je décode aussi le pseudo car les espaces sont encodés, j'espere qu'on aura pas a le faire pour les ID sinon c'est la gigamerde
      
      this.router.navigate(['/register', this.snapUserAvatarId, this.snapUserId, this.snapUserAvatarUrl, this.snapUserPseudo]);
      
      browser.close();
      browser.hide(); // sur cette ligne tu ferme le browser et en dessous tu navigate vers register et tu mets en parametre les infos snap que t'as besoin (toutes:))
    }
  })
  //this.http.get('http://localhost:3000/login/snapchat')
  //.subscribe(
    //(response : any) => {})


}

}
