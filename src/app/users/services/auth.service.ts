import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Register } from '../models/register';

const headerData = {
  headers: { 'Content-Type': 'application/json' },
};
// inerceptors : which is used to manipulate your req or res
// npx ng g interceptor ==> when we are performing rest call?
// header data
// token
// log (rest calls)
// handling errors

@Injectable({
  providedIn: 'root',
}) // will instruct to create only one object.singleton DP.
// to perform the rest : httpclientmodule : httpclient (service) // how can get it?
// DI : dependancy injection : like spring app
// @autowired
// we will do DI via constructor
export class AuthService {
  // httpClient Object : angular will provide
  constructor(private httpClient: HttpClient) {
    // thsi the way to perform DI.
  }
  registerUser(data: Register): Observable<any> {
    let endPoint = '/api/users/register';
    // success
    // failure
    // Observable :
    return this.httpClient.post(endPoint, data);
  }

  loginUser(data: any): Observable<any> {
    return this.httpClient.post('/api/users/login', data);
  }
}
