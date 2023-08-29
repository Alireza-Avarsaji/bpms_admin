import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { QuestionTypeList } from 'src/shared/constants/q-types';
import { INameValue, QuestionModel, QuestionTypesEnum } from 'src/shared/models/question.model';
import { QuestionFormTypes, State } from './state/question.state.model';
import * as QuestionActions from './state/questions.actions';
import { v4 as uuidv4 } from 'uuid';
import { QTextFormModel } from 'src/shared/components/subQuestions/q-text/models';
import { Observable } from 'rxjs';
import { getFormBasedQuestions } from './state/question.selectors';

@Component({
  selector: 'app-create-question',
  templateUrl: './create-question.component.html',
  styleUrls: ['./create-question.component.scss'],
})
export class CreateQuestionComponent implements OnInit {

  question!: QuestionModel;
  QuestionMenuItems: INameValue[] = QuestionTypeList;
  questionTypeEnum = QuestionTypesEnum;
  subQuestions$!: Observable<QuestionFormTypes[]>;


  constructor(private store: Store<State>) { }

  ngOnInit(): void {
    this.subQuestions$ = this.store.select(getFormBasedQuestions);
  }

  // ? add a subQuestion to the store
  public addSubQuestion(qType: INameValue) {
    const id = uuidv4();
    this.store.dispatch(
      QuestionActions.AddSubQuestion({ formValue: ({ id: id, type: qType.value }) as QTextFormModel })
    );
  }

  trackById(index: number, item: QuestionFormTypes) {
    return item.id;
  }


  // ? whenEver a subQuestion value is changed
  onSubValueChanged(value: QuestionFormTypes) { 
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
