import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserQuestionListComponent } from './user-question-list/user-question-list.component';
import { UserAnswerListComponent } from './user-answer-list/user-answer-list.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';

const routes: Routes = [
    { 
        path: 'profiles/:username',
        component: UserProfileComponent,
        children: [
          { path: '', redirectTo: 'questions', pathMatch: 'prefix'},
          { path: 'questions', component: UserQuestionListComponent},
          { path: 'answers', component: UserAnswerListComponent}
        ]
      },
      { path: 'profiles/:username/edit-profile', component: EditProfileComponent},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]

})
export class ProfileRoutingModule {

}