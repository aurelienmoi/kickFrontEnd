import { UploadMusicPageModule } from './members/upload-music/upload-music.module';
import { TopToolbarModule } from './members/_layouts/top-toolbar/top-toolbar.module';
import { FollowingPageModule } from './members/following/following.module';
import { MessagingPageModule } from './members/messaging/messaging.module';
import { AccountPageModule } from './members/account/account.module';
import { AboutUsecasePageModule } from './members/about/_inc/about-usecase/about-usecase.module';
import { ModalAboutUsingPageModule } from './members/about/_inc/modal-about-using/modal-about-using.module';
import {FormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FileChooser } from '@ionic-native/file-chooser/ngx';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import {IonicStorageModule} from '@ionic/storage';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { TokenInterceptorService } from './services/token-interceptor.service';
import {UsersService} from './services/users.service';
import {NgxAutoScrollModule} from 'ngx-auto-scroll';
import {MusicPlayerComponent} from './members/music-player/music-player.component';
import { NavParams } from '@ionic/angular';
import { Media } from '@ionic-native/media/ngx';
import { FollowersPageModule } from './members/followers/followers.module';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {InAppBrowser} from '@ionic-native/in-app-browser/ngx'
import {PostsComponent} from './members/posts/posts.component'
import { PostService } from './services/post.service';
import {CommentsComponent} from './members/comments/comments.component';
import { StreamsModule } from './members/streams/streams.module';
@NgModule({
  declarations: [
    AppComponent, MusicPlayerComponent
  ],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    IonicStorageModule.forRoot(),
    FormsModule,
    ModalAboutUsingPageModule,
    AboutUsecasePageModule,
    AccountPageModule,
    MessagingPageModule,
    FollowersPageModule,
    FollowingPageModule,
    NgxAutoScrollModule,
    BrowserAnimationsModule,
    TopToolbarModule,
    UploadMusicPageModule,
    StreamsModule
    
  ],
  providers: [
    Media,
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    FileChooser,
    FileTransfer,
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorService, multi: true },
    UsersService,
    Geolocation,
    InAppBrowser,
    PostService
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
