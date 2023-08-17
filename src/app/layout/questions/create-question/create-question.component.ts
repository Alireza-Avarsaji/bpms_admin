import { Component, OnInit } from '@angular/core';
import { QuestionTypeList } from 'src/shared/constants/q-types';
import { INameValue, QuestionModel, QuestionTypesEnum, SubQuestionModel } from 'src/shared/models/question.model';

@Component({
  selector: 'app-create-question',
  templateUrl: './create-question.component.html',
  styleUrls: ['./create-question.component.scss'],
})
export class CreateQuestionComponent implements OnInit {

  question!: QuestionModel;
  subQuestions: SubQuestionModel[] = [new SubQuestionModel(), new SubQuestionModel(), new SubQuestionModel(), new SubQuestionModel(), new SubQuestionModel()];
  QuestionMenuItems: INameValue[] = QuestionTypeList;
  questionTypeEnum = QuestionTypesEnum;


  constructor() {}

  ngOnInit(): void {
    this.subQuestions[0].type = this.questionTypeEnum.text;
    this.subQuestions[1].type = this.questionTypeEnum.single_select;
    this.subQuestions[2].type = this.questionTypeEnum.multi_select;
    this.subQuestions[3].type = this.questionTypeEnum.range;
    this.subQuestions[4].type = this.questionTypeEnum.date;
    
  }

  public addSubQuestion(qType: INameValue) {
    
  }

  public removeQuestion() {}

  public submitQuestion() {}
}
