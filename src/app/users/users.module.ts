import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { RegisterComponent } from './components/auth/register/register.component';
import { LoginComponent } from './components/auth/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpInterceptors } from '../shared/interceptors';
import { RegisterReactiveComponent } from './components/auth/register-reactive/register-reactive.component';

@NgModule({
  declarations: [RegisterComponent, LoginComponent, RegisterReactiveComponent],
  providers: [AuthService, HttpInterceptors],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    UsersRoutingModule,
  ],
})
export class UsersModule {}
