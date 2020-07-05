import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnswerComponent } from './answer/answer.component';
import { AnswerListComponent } from './answer-list/answer-list.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { CommentComponent } from './comment/comment.component';
import { QuestionComponent } from './question/question.component';
import { QuestionItemComponent } from './question-item/question-item.component';
import { QuestionsListComponent } from './questions-list/questions-list.component';
import { MainRoutingModule } from './main-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [
    AnswerComponent,
    AnswerListComponent,
    CategoryListComponent,
    CommentComponent,
    QuestionComponent,
    QuestionItemComponent,
    QuestionsListComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    MainRoutingModule
  ],
  exports: [
    CategoryListComponent,
    QuestionItemComponent,
    AnswerComponent
  ]
})
export class MainModule { }
