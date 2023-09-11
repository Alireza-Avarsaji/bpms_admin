import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { QuestionTypeList } from 'src/shared/constants/q-types';
import { INameValue, QuestionModel, QuestionTypesEnum } from 'src/shared/models/question.model';
import { QuestionFormTypes, State } from './state/question.state.model';
import * as QuestionActions from './state/questions.actions';
import { v4 as uuidv4 } from 'uuid';
import { Observable, distinctUntilChanged, map, tap } from 'rxjs';
import { getQuestionIsValid, getQuestionState } from './state/question.selectors';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-question',
  templateUrl: './create-question.component.html',
  styleUrls: ['./create-question.component.scss'],
})
export class CreateQuestionComponent implements OnInit {

  question!: QuestionModel;
  QuestionMenuItems: INameValue[] = QuestionTypeList;
  questionTypeEnum = QuestionTypesEnum;
  subQuestions$!: Observable<QuestionFormTypes<any>[]>;
  isQuestionValid$!: Observable<boolean>;
  title$!: Observable<string>;
  form!: FormGroup;


  constructor(private store: Store<State>, private fb: FormBuilder, private activeRoute: ActivatedRoute ) { }

  ngOnInit(): void {
    this.checkRoute().pipe(
      tap(() => this.initForm())
    ).subscribe();
    this.subQuestions$ = this.store.select(getQuestionState).pipe(map(s => s.formBasedQuestions));
    this.isQuestionValid$ = this.store.select(getQuestionIsValid);
    this.store.select(getQuestionState).pipe(tap(s => this.form.get('title')?.setValue(s.title))).subscribe();
    this.handleFormValueChange();
  }

  checkRoute() {
    return this.activeRoute.params.pipe(
      tap(param => {    
        if(param['id']) {
          this.store.dispatch(QuestionActions.loadQuestion({id: param['id']}));
        }
      })
    );
  }

  initForm() {
    this.form = this.fb.group({
      title: new FormControl(null, [Validators.required])
    });
  }

  handleFormValueChange() {
    this.form.get('title')?.valueChanges.pipe(
      distinctUntilChanged()
    )
    .subscribe(value => {
      this.store.dispatch(QuestionActions.UpdateQuestionTitle({title: value}));
    });
  }

  // ? add a subQuestion to the store
  public addSubQuestion(qType: INameValue) {
    const id = uuidv4();
    this.store.dispatch(
      QuestionActions.AddSubQuestion({ formValue: { id: id, type: qType.value, key: '', isValid: false } })
    );
  }

  public removeSubQuestion(sub: QuestionFormTypes<any>) {
    this.store.dispatch(QuestionActions.RemoveSubQuestion({id: sub.id}));
  }

  trackById(index: number, item: QuestionFormTypes<any>) {
    return item.id;
  }


  // ? whenEver a subQuestion value is changed
  onSubValueChanged(value: QuestionFormTypes<any>) {
    this.store.dispatch(
      QuestionActions.UpdateSubQuestion(
        {
          formValue: value
        }
      )
    );
  }


  public submitQuestion() {
    this.store.dispatch(QuestionActions.postQuestion());
  }
}
