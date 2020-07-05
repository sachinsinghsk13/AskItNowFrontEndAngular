import { Component, OnInit, Input } from '@angular/core';
import {  } from '@fortawesome/free-solid-svg-icons';
import { faThumbsUp, faThumbsDown, faCommentAlt } from '@fortawesome/free-regular-svg-icons';
import { HttpClient } from '@angular/common/http';
import { Answer } from 'src/app/interfaces/answer';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.scss']
})
export class AnswerComponent implements OnInit {
  thumbsUpIcon = faThumbsUp;
  thumbsDownIcon = faThumbsDown;
  commentIcon = faCommentAlt;

  showComments :boolean = false;
 
  @Input() answer: Answer;

  constructor(private http: HttpClient) { 

  }

  toggleComments() {
    this.showComments = !this.showComments;
  }

  ngOnInit(): void {
   
  }

}
