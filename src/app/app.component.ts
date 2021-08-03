import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './services/authentication.service';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Storage } from '@ionic/storage';
import { Keyboard } from '@ionic-native/keyboard/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  providers: [Keyboard]
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private authenticationService: AuthenticationService,
    private router: Router,
    public keyboard:Keyboard
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      this.authenticationService.getUserByToken().subscribe(res => {
        if (res.loggedIn != true){

          this.authenticationService.logout();
    
         }
         else {
           console.log(res);
           this.authenticationService.loginDataStorage(res.username,res.isArtiste,res.isBeatmaker,res.bio,res.registrationDate,res.id,res.following,res.followed,res.pseudo,res.roles);

         }
        this.authenticationService.authenticationState.subscribe(state => {
          if (state) {
            this.router.navigate(['members', 'dashboard']);
          } else {
           this.router.navigate(['home']); 
            
          }
        });
      }); // checktoken on app init
 

 
    });
  }
}
