import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';



@NgModule({
  declarations: [LoginComponent, UserRegistrationComponent, ForgetPasswordComponent],
  imports: [
    CommonModule
  ]
})
export class AuthorizationModule { }
