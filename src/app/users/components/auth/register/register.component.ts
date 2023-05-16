import { Component, OnInit } from '@angular/core';
import { Register } from 'src/app/users/models/register';
import { AuthService } from 'src/app/users/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  register: Register = new Register();
  error: any = {};
  // error : fieldName
  // any  :type : can we predict exact error ?
  // {} : blank json object
  //
  // ref : Type = new CN();

  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  // form Submission
  // formName/componentName/Submit
  // registerSubmit
  //ngSubmit : directive : its an extended arm provided to the html tag to consume the extra functionality
  // all directives predefined directives from the angular are starting with ng word.
  // (ngSubmit) = 'registerSubmit' inside the form tag.

  registerSubmit() {
    console.log(JSON.stringify(this.register));
    console.log('hello from abhi');
    this.authService.registerUser(this.register).subscribe(
      (res) => {
        console.log(JSON.stringify(res));
        this.error = {};
      },
      (err) => {
        console.log(JSON.stringify(err));
        this.error = err.error;
      }
    );
  }
}
