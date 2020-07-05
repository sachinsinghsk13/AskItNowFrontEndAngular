import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AuthorizationRoutingModule } from './authorization-routing.module';



@NgModule({
  declarations: [LoginComponent, UserRegistrationComponent, ForgetPasswordComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
    AuthorizationRoutingModule
  ]
})
export class AuthorizationModule { }
