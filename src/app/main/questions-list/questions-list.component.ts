import { Component, OnInit } from '@angular/core';
import { faRedoAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-questions-list',
  templateUrl: './questions-list.component.html',
  styleUrls: ['./questions-list.component.scss']
})
export class QuestionsListComponent implements OnInit {
  refreshIcon = faRedoAlt;
  constructor() { }

  ngOnInit(): void {
  }

}
