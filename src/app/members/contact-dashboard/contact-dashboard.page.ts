import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../../services/users.service';
import { AuthenticationService } from '../../services/authentication.service';
import { TopToolbarComponent } from 'src/app/members/_layouts/top-toolbar/top-toolbar.component';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-contact-dashboard',
  templateUrl: './contact-dashboard.page.html',
  styleUrls: ['./contact-dashboard.page.scss'],
})
export class ContactDashboardPage implements OnInit {

  constructor(private http: HttpClient,
              private route: ActivatedRoute,
              private usersService: UsersService,
              private authService: AuthenticationService,
              private popover:PopoverController) 
  {
    this.dataLoaded = false;
    this.bitmojiLink = "assets/img/bitmoji.png"
  }
  data: any;
  ennemyUserId: any;
  rowPseudo = "pseudo";
  ennemyUserData: any;
  ennemyUsername: string;
  ennemyPseudo: string;
  ennemyBiography: string;
  following: any;
  followers: any;
  jambon: any;
  dataLoaded : boolean;
  bitmojiLink: string;
  roles : any;
  
  /////////// PROFIL MENU COMPONENT
  isOnNotifications : boolean;
  isOnLibrary : boolean;
  isOnMain : boolean;

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.dataLoaded = true;
      this.ennemyUsername = params.pseudo;
      this.ennemyUserId = params.user_id;
      this.rowPseudo = this.ennemyUserId;
      this.usersService.getUserById(this.ennemyUserId).subscribe(data => {
        console.log(data.result);
        this.ennemyBiography = data.result.bio;
        this.ennemyUsername = data.result.username;
        this.ennemyPseudo = data.result.pseudo;
        this.following = data.result.following.length;
        this.followers = data.result.followers.length;
        this.roles = params.roles;
        console.log(this.roles);
      })
    })

    if (!this.isOnNotifications && !this.isOnLibrary) {
      this.isOnNotifications = false;
      this.isOnLibrary = false;
      this.isOnMain = true;
    }
  }

  onNotifications() {
    this.isOnNotifications = true;
    this.isOnLibrary = false;
    this.isOnMain = false;
  }

  onLibrary() {
    this.isOnNotifications = false;
    this.isOnLibrary = true;
    this.isOnMain = false;
  }

  onMain() {
    this.isOnNotifications = false;
    this.isOnLibrary = false;
    this.isOnMain = true;
  }

  async presentPopover(ev: any) {
    const popover = await this.popover.create({
      component: TopToolbarComponent,
      cssClass: 'popoverClass',
      event: ev
    });
    return await popover.present();
  }
}
