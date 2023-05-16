import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/users/services/auth.service';
import { Router } from '@angular/router';
import jwt_decode from 'jwt-decode';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  login: any = {};
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  loginSubmit() {
    this.authService.loginUser(this.login).subscribe(
      (response: any) => {
        console.log(JSON.stringify(response));
        // we will get the token
        // in browser : 1. localstorage 2. cookies : gone
        // why localstorage : content can be accessible to the specific domain
        localStorage.setItem('token', response.token);
        // can i decode the token?
        localStorage.setItem(
          'userDetails',
          JSON.stringify(jwt_decode(response.token))
        );

        let listOfRoles = '';
        let tempRoles = response.roles.map((role) => listOfRoles.concat(role));
        localStorage.setItem('roles', tempRoles);
        // switch to dashboard component and it should happend dynamically.
        this.router.navigate(['/dashboard']);
      },
      (err: any) => {
        console.log(JSON.stringify(err));

        // based on the failure part can we provide the
        // proper error messages on the screen.
      }
    );
  }
}
