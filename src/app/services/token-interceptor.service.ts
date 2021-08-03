import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError, from } from 'rxjs';
import { ToastController } from '@ionic/angular';
import {Storage} from '@ionic/storage';
import { switchMap } from 'rxjs/operators';
import {AuthenticationService} from './../services/authentication.service';
@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  

  constructor(public toastController: ToastController, private storage : Storage) {}


  intercept(request: HttpRequest<any>, next: HttpHandler) : Observable<HttpEvent<any>>{
    const TOKEN_KEY ='ACCES_TOKEN';    
    console.log("requete avant",request.body);
     return from(this.storage.get(TOKEN_KEY))
          .pipe(
            switchMap(token => {
              if (token){
        //      console.log("InterceptedHTTPRequest")
               const headers = request.headers
                        .append('x-access-token', token)
               const requestClone = request.clone({
                 headers 
                });
           //     console.log("request interceptée et clonée");
             //   console.log("request apres",requestClone.body);
              return next.handle(requestClone);
              }
              else {
                return next.handle(request);
              }
              
              }),
            );
     
  }
}


