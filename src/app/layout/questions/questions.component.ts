import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateQuestionComponent } from 'src/shared/components/create-question/create-question.component';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {
    
  }

  createQuestion() {
    const ref = this.dialog.open(CreateQuestionComponent, {
      
    }) 
  }



}
