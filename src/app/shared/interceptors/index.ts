// we will register all the interceptors into an array
//

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorInterceptor } from './error.interceptor';
import { HeaderInterceptor } from './header.interceptor';
import { LogInterceptor } from './log.interceptor';
import { TokenInterceptor } from './token.interceptor';

export const HttpInterceptors = [
  // register
  {
    provide: HTTP_INTERCEPTORS, // interceptors are background services httpinterceptor
    useClass: HeaderInterceptor, // impl of your interceptor
    multi: true,
  },

  {
    provide: HTTP_INTERCEPTORS, // interceptors are background services httpinterceptor
    useClass: LogInterceptor, // impl of your interceptor
    multi: true,
  },
  {
    provide: HTTP_INTERCEPTORS, // interceptors are background services httpinterceptor
    useClass: TokenInterceptor, // impl of your interceptor
    multi: true,
  },
  {
    provide: HTTP_INTERCEPTORS, // interceptors are background services httpinterceptor
    useClass: ErrorInterceptor, // impl of your interceptor
    multi: true,
  },
];
