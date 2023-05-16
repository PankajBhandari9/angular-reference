import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import validateToken from 'src/app/utils/validateToken';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    // 1. we need the token(JWT token)
    const token = localStorage.getItem('token');
    if (token) {
      // presence of the token
      if (validateToken()) {
        // 2. validate the token
        return true; // 3. if the token is valid then we can activate the route
      } else {
        return false;
      }
    } else {
      this.router.navigate(['/unauthorized']);
      return false; // 4. else shift the user to unauthorized page .
    }

    return true;
  }
  /// if the token is valid then and then it should activate the route i.e. module/component
}
