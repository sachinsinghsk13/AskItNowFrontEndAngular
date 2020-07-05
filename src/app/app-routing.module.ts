import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './authorization/login/login.component';
import { UserRegistrationComponent } from './authorization/user-registration/user-registration.component';
import { UserProfileComponent } from './profile/user-profile/user-profile.component';
import { EditProfileComponent } from './profile/edit-profile/edit-profile.component';
import { UserQuestionListComponent } from './profile/user-question-list/user-question-list.component';
import { UserAnswerListComponent } from './profile/user-answer-list/user-answer-list.component';

const routes: Routes = [
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
