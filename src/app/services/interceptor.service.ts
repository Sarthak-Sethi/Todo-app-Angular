import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
   req = req.clone({
     setHeaders: { Authorization:  this.createBasicAuthenticationHttpHeader() }
   });
   return next.handle(req);
  }

  createBasicAuthenticationHttpHeader(): string {
    const username = 'sarthak';
    const password = 'sarthak';
    const basicAuthenticationHeaderString = 'Basic ' + window.btoa(username + ':' + password);
    return basicAuthenticationHeaderString;
  }

}
