import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-library-profil',
  templateUrl: './library-profil.component.html',
  styleUrls: ['./library-profil.component.scss'],
})
export class LibraryProfilComponent implements OnInit {

  constructor(private userService: UsersService, private authService: AuthenticationService, private route : ActivatedRoute) { }
  id: any;
  ennemyUserId: any;
  libraryTest = [];
  userVisitedData : any;
  getMusics(ennemyUserId) {
    this.userService.getUserMusics(ennemyUserId).subscribe(data => {
      this.userVisitedData = data.result;
      console.log(this.libraryTest.length, data.musics.length);
      let n=0;
      while (this.libraryTest.length< data.musics.length) {
      this.libraryTest[n] = data.musics[n];
      n++;
    }
    })
  }

  ngOnInit() {
    this.route.params.subscribe(params => {

      this.ennemyUserId = params.user_id;
      console.log(this.ennemyUserId);
      this.getMusics(this.ennemyUserId);

    })


  }
}
