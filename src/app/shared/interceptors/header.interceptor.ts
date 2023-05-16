import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {
  constructor() {}
  // any and unknown
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    console.log('header interceptor called');
    // 1. if the request is having headers
    // if(request.url.indexOf("/report"))
    if (request.headers.has('Content-Type')) {
      // application/xml
      // application/png/pdf apart from application/json
      return next.handle(request);
    }
    // 2. if the request is not having headers then check if the request has url pattern

    request = request.clone({
      headers: request.headers.set('Content-Type', 'application/json'),
    });

    // we can't manipulate the request object directly
    // we have to clone the request object and provide the additional properties/headers
    // manipulation of the request/response
    return next.handle(request); // will give a call to next interceptor/resource
  }
}
