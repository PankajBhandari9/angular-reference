import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MisMatch } from 'src/app/utils/must-match-validator';

@Component({
  selector: 'app-register-reactive',
  templateUrl: './register-reactive.component.html',
  styleUrls: ['./register-reactive.component.css'],
})
export class RegisterReactiveComponent implements OnInit {
  acceptTermsandConditions: boolean = false;
  registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group(
      {
        title: ['', Validators.required],
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        dob: [
          '',
          Validators.required,
          Validators.pattern(
            /^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/
          ),
        ],
        email: ['', Validators.required, Validators.email],
        password: ['', Validators.required, Validators.minLength(8)],
        confirmPassword: ['', Validators.required, Validators.minLength(8)],
        acceptTerms: [false, Validators.requiredTrue],
      },
      { validator: MisMatch('password', 'confirmPassword') }
    );
  }
}
