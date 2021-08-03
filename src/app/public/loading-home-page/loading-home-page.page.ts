import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../../services/authentication.service';
@Component({
  selector: 'app-loading-home-page',
  templateUrl: './loading-home-page.page.html',
  styleUrls: ['./loading-home-page.page.scss'],
})

export class LoadingHomePagePage implements OnInit {
  slogan: string;

  constructor(private authenticationService : AuthenticationService, private router : Router) { this.slogan = "Rejoins la plus grande communauté rap de France !";}

  ngOnInit() {
    
  }

  ionViewDidEnter() {
    this.authenticationService.authenticationState.subscribe(state => {
      if (state) {
        this.router.navigate(['members', 'dashboard']);
      } else {
       this.router.navigate(['home']); 
        
      }
    });
  }



}
