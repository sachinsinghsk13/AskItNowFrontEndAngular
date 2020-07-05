import { Component, OnInit, Input } from '@angular/core';
import { Page } from 'src/app/interfaces/page';
import { Answer } from 'src/app/interfaces/answer';

@Component({
  selector: 'app-answer-list',
  templateUrl: './answer-list.component.html',
  styleUrls: ['./answer-list.component.scss']
})
export class AnswerListComponent implements OnInit {
  answers: Page<Answer>;
  @Input() questionId: number;

  constructor() { 

  }

  ngOnInit(): void {

  }

}
