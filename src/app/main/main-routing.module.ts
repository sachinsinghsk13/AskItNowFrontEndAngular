import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuestionsListComponent } from './questions-list/questions-list.component';
import { QuestionComponent } from './question/question.component';

const routes: Routes = [
    { path: '', redirectTo: '/questions', pathMatch: 'full'},
    { path: 'questions', component: QuestionsListComponent},
    { path: 'questions/:id', component: QuestionComponent}
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class MainRoutingModule {

}