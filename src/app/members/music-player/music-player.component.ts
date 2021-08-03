import { Component, OnInit, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { Howl } from 'howler';
import { IonRange } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../../services/users.service';
import { AuthenticationService } from '../../services/authentication.service';
import { Media, MediaObject } from '@ionic-native/media/ngx';
let baseUrl= "myserveradress";
export interface track {
  name: string;
  path: string;
}
@Component({
  selector: 'app-music-player',
  templateUrl: './music-player.component.html',
  styleUrls: ['./music-player.component.scss'],
})
export class MusicPlayerComponent implements OnInit {

  constructor(private media: Media, private http: HttpClient, private route: ActivatedRoute, private userService: UsersService, private authService: AuthenticationService) { }
  musicId: string;
  userData: any;
  showOverlay: boolean;

  playlist: track[] = [
    {
      name: 'Dummy',
      path: `http://localhost:8080/tracks/dummy`
    }




  ];
  data: any;
  trackMusicId: track[];
  activeTrack: track = null;
  player: Howl = null;
  isPlaying = false;
  progress = 0;
  seekVariable: any;
  @ViewChild('range') range: IonRange;    // when we go to angular 8 we have to put { static : false} as second argument for the viewChile function
  start(track: track) {
    this.activeTrack = track;
    this.showOverlay =true;
    if (this.player) {
      this.player.stop();
    }
    this.player = new Howl({
      src: [track.path],
      format: ["mp3"],
    //  html5: true,      //this need to be here for IOS
      onplay: () => {
        this.showOverlay = false;
        this.isPlaying = true;

        this.updateProgress();
      },
      onend: () => {

      }
    });
    this.player.play();
  }

  stop(track) {
    this.isPlaying = false;
    this.activeTrack = track;
    this.updateProgress();
  }

  togglePlayer(pause) {
    this.isPlaying = !pause;
    if (pause) {
      this.player.pause();
    }
    else {
      this.player.play();
    }
  }
  next() {
    let index = this.playlist.indexOf(this.activeTrack);
    if (index != this.playlist.length - 1) {
      this.start(this.playlist[index + 1]);

    }
    else {
      this.start(this.playlist[0]);
    }
  }

  prev() {
    let index = this.playlist.indexOf(this.activeTrack);
    if (index > 0) {
      this.start(this.playlist[index - 1]);

    }
    else {
      this.start(this.playlist[this.playlist.length - 1])
    }
  }
  seek() {
    let newValue = +this.range.value;
    let duration = this.player.duration();

    console.log(this.player.seek(duration * (newValue / 100)));
  }
  updateProgress() {

    this.seekVariable = this.player.seek(); // the "let  seek = this.player.seek();" cant  be used because seek has two types (number | howl) this need to be fixed later
    this.player.seek();
    this.progress = (this.seekVariable / this.player.duration()) * 100 || 0;
    setTimeout(() => {
      this.updateProgress();
    }, 1000)
  }

  loop() {

  }


  deleteFromPlaylist(musicName) {
    console.log(musicName);
    this.data = {
      musicName: musicName,
      userId: this.userData.id
    }

    this.userService.deleteFromPlaylist(this.data).subscribe(data => {
      console.log(data.userPlaylist);


      if (data.userPlaylist.length === 0) { // YOU CAN DELETE THIS IF U DONT WANT THIS MESSAGE TO SHOW , OR SHOW IT IN ANOTHER WAY @THOMAAAAAAAS
        this.playlist[0] = {
          name: 'Remplissez votre playlist !',
          path: null
        }
      }
  
      return this.playlist
    })
 

    var removeIndex = this.playlist.map(function(item) { return item.name; }).indexOf(musicName);
    // remove object
    this.playlist.splice(removeIndex, 1);
    console.log(this.playlist);
      return this.playlist;
    
  }

  ionViewDidLeave() {
    this.player.unload();
  }
  ngOnInit() {
    this.userData = this.authService.userData;


    this.route.params.subscribe(params => {
      this.musicId = params.musicId;
      this.data = {
        musicId: this.musicId

      };

      this.userService.addToPlaylist(this.data).subscribe(data => {

        let n = 0;
        while (n < data.userPlaylist.length) {

          console.log(data.userPlaylist[n].name);
          this.playlist[n] = {
            name: data.userPlaylist[n].name,
            path: `${baseUrl}/tracks/${data.userPlaylist[n].musicId}`
          }
          n++;
        }
      })


    })

  }


}