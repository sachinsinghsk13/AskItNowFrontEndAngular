import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UserQuestionListComponent } from './user-question-list/user-question-list.component';
import { UserAnswerListComponent } from './user-answer-list/user-answer-list.component';
import { ProfileRoutingModule } from './profile-routing.module';
import { MainModule } from '../main/main.module';



@NgModule({
  declarations: [
    UserProfileComponent,
    EditProfileComponent,
    UserQuestionListComponent, 
    UserAnswerListComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    MainModule,
    ProfileRoutingModule
  ],
  exports: [
    
  ]
})
export class ProfileModule { }
