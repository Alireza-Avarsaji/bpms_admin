import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { QuestionTypeList } from 'src/shared/constants/q-types';
import { INameValue, QuestionModel, QuestionTypesEnum } from 'src/shared/models/question.model';
import { QuestionFormTypes, State } from './state/models';
import * as QuestionActions from './state/questions.actions';
import { v4 as uuidv4 } from 'uuid';
import { QTextFormModel } from 'src/shared/components/subQuestions/q-text/models';
import { Observable, tap } from 'rxjs';
import { getFormBasedQuestions } from './state/question.selectors';

@Component({
  selector: 'app-create-question',
  templateUrl: './create-question.component.html',
  styleUrls: ['./create-question.component.scss'],
})
export class CreateQuestionComponent implements OnInit {

  question!: QuestionModel;
  // subQuestions: SubQuestionModel[] = [new SubQuestionModel(), new SubQuestionModel(), new SubQuestionModel(), new SubQuestionModel(), new SubQuestionModel(), new SubQuestionModel(), new SubQuestionModel(), new SubQuestionModel()];
  QuestionMenuItems: INameValue[] = QuestionTypeList;
  questionTypeEnum = QuestionTypesEnum;

  // subQuestions$!: Observable<QuestionFormTypes[]>;
  subQuestions$!: Observable<QuestionFormTypes[]>;


  constructor(private store: Store<State>) { }

  ngOnInit(): void {

    this.subQuestions$ = this.store.select(getFormBasedQuestions).pipe(
      tap(res => {
        console.log(res);
        
      })
    );
    // this.subQuestions[0].type = this.questionTypeEnum.text;
    // this.subQuestions[1].type = this.questionTypeEnum.single_select;
    // this.subQuestions[2].type = this.questionTypeEnum.multi_select;
    // this.subQuestions[3].type = this.questionTypeEnum.range;
    // this.subQuestions[4].type = this.questionTypeEnum.date;
    // this.subQuestions[5].type = this.questionTypeEnum.time;
    // this.subQuestions[6].type = this.questionTypeEnum.file;
    // this.subQuestions[7].type = this.questionTypeEnum.radio;

  }

  // ? add a subQuestion to the store
  public addSubQuestion(qType: INameValue) {
    const id = uuidv4();
    // this.subQuestions$.push({id, type: qType.value} as QTextFormModel);



    this.store.dispatch(
      QuestionActions.AddSubQuestion({ formValue: ({ id: id, type: qType.value }) as QTextFormModel })
    );
  }

  trackById(index: number, item: QuestionFormTypes) {
    return item.id;
  }


  // ? whenEver a subQuestion value is changed
  onSubValueChanged(value: QuestionFormTypes) {

    // const el = this.subQuestions$.find(e => e.id == value.id)!;
    // const index = this.subQuestions$.indexOf(el);
    // this.subQuestions$[index] = value;
    // console.log(this.subQuestions$);
    

    this.store.dispatch(
      QuestionActions.UpdateSubQuestion(
        {
          formValue: value
        }
      )
    );
  }

  public removeQuestion() { }

  public submitQuestion() { }
}
