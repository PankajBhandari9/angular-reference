import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  ResolveStart,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RoleGuard implements CanActivate {
  constructor(private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    console.log('inside the role guard');
    console.log(localStorage.getItem('roles'));

    let tempRoleList: any[] = localStorage.getItem('roles').split(',');

    // 1. do we need to read that roles array from the localStorage
    console.log(route.url[0].path);
    console.log(route.url[0]);
    if (
      localStorage.getItem('roles').includes('superadmin') &&
      route.url[0].path == 'super-admin-dashboard'
    ) {
      console.log('superadmin');
      return true;
    } else if (
      localStorage.getItem('roles').includes('admin') &&
      route.url[0].path == 'admin-dashboard'
    ) {
      console.log('admin');
      return true;
    } else if (
      localStorage.getItem('roles').includes('user') &&
      route.url[0].path == 'user-dashboard'
    ) {
      console.log('hlello from user');
      return true;
    } else {
      this.router.navigate(['/dashboard/unauthorized']);
      return false;
    } // 2. if role exists then return true
    // 3. if role does not exist then return false
    //4. you are not allowed to access this page.
    // when we will change our role then how to handle this?
    // let's say if we don't have token and roles specifications then it should redirect to
    // to our unauthorized page but URL should be changed. (security)
  }
}
