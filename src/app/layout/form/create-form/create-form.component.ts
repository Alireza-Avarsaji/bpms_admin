import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { QuestionTypeList } from 'src/shared/constants/q-types';
import { INameValue, FormModel, QuestionTypesEnum } from 'src/shared/models/question.model';
import { FormBasedQuestion, State } from './state/form.state.model';
import * as FormActions from './state/form.actions';
import { v4 as uuidv4 } from 'uuid';
import { Observable, distinctUntilChanged, map, tap } from 'rxjs';
import { getFormIsValid, getFormState, getPostFormError, getPostFormSuccess, getUpdateFormError, getUpdateFormSuccess } from './state/form.selectors';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.scss'],
})
export class CreateFormComponent implements OnInit, OnDestroy {

  question!: FormModel;
  QuestionMenuItems: INameValue[] = QuestionTypeList;
  questionTypeEnum = QuestionTypesEnum;
  questions$!: Observable<FormBasedQuestion<any>[]>;
  isFormValid$!: Observable<boolean>;
  title$!: Observable<string>;
  form!: FormGroup;
  mode: 'create' | 'update' = 'create';


  constructor(
    private store: Store<State>,
    private fb: FormBuilder,
    private activeRoute: ActivatedRoute,
    private _snackBar: MatSnackBar,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.checkRoute().pipe(
      tap(() => this.initForm())
    ).subscribe();

    this.questions$ = this.store.select(getFormState).pipe(map(s => s.formBasedQuestions));
    this.isFormValid$ = this.store.select(getFormIsValid);
    this.store.select(getFormState).pipe(tap(s => this.form.get('title')?.setValue(s.title))).subscribe();
    this.store.select(getFormState).pipe(tap(s => this.form.get('hint')?.setValue(s.hint))).subscribe();
    this.handleFormValueChange();
    this.handlePostFormSuccess().subscribe();
    this.handlePostFormError().subscribe();
    this.handleUpdateFormSuccess().subscribe();
    this.handleUpdateFormError().subscribe();
  }

  checkRoute() {
    return this.activeRoute.params.pipe(
      tap(param => {
        if (param['id']) {
          this.mode = 'update';
          this.store.dispatch(FormActions.loadForm({ id: param['id'] }));
        }
      })
    );
  }

  initForm() {
    this.form = this.fb.group({
      title: new FormControl(null, [Validators.required]),
      hint: new FormControl(null),
    });
  }

  handleFormValueChange() {
    this.form.get('title')?.valueChanges.pipe(
      distinctUntilChanged()
    ).subscribe(value => {
      this.store.dispatch(FormActions.UpdateFormTitle({ title: value }));
    });
    this.form.get('hint')?.valueChanges.pipe(
      distinctUntilChanged()
    ).subscribe(value => {
      this.store.dispatch(FormActions.UpdateFormHint({ hint: value }));
    });
  }

  // ? add a subQuestion to the store
  public addSubQuestion(qType: INameValue) {
    const id = uuidv4();
    this.store.dispatch(
      FormActions.AddQuestion({ formValue: { id: id, type: qType.value, key: '', isValid: false } })
    );
  }

  public removeSubQuestion(sub: FormBasedQuestion<any>) {
    this.store.dispatch(FormActions.RemoveQuestion({ id: sub.id }));
  }


  trackById(index: number, item: FormBasedQuestion<any>) {
    return item.id;
  }


  // ? whenEver a subQuestion value is changed
  onSubValueChanged(value: FormBasedQuestion<any>) {
    this.store.dispatch(
      FormActions.UpdateQuestion(
        {
          formValue: value
        }
      )
    );
  }

  public submitForm() {
    if (this.mode == 'create')
      this.store.dispatch(FormActions.postForm());
    else
      this.store.dispatch(FormActions.updateForm());
  }

  handlePostFormSuccess() {

    return this.store.select(getPostFormSuccess).pipe(
      tap(success => {
        if (success) {
          this._snackBar.open(
            'با موفقیت ثبت شد', undefined, {
            duration: 3500
          }
          );
          this.router.navigate(['/layout/forms'], { queryParams: { page: 1 } });
        }
      })
    )

  }

  handlePostFormError() {
    return this.store.select(getPostFormError).pipe(
      tap(error => {
        if (error) {
          this._snackBar.open(
            'عملیات با خطا مواجه شد', undefined, {
            duration: 2500
          }
          );
        }
      })
    )
  }

  handleUpdateFormSuccess() {

    return this.store.select(getUpdateFormSuccess).pipe(
      tap(success => {
        if (success) {
          this._snackBar.open(
            'با موفقیت ثبت شد', undefined, {
            duration: 3500
          }
          );
          this.router.navigate(['/layout/forms'], { queryParams: { page: 1 } });
        }
      })
    )

  }

  handleUpdateFormError() {
    return this.store.select(getUpdateFormError).pipe(
      tap(error => {
        if (error) {
          this._snackBar.open(
            'عملیات با خطا مواجه شد', undefined, {
            duration: 2500
          }
          );
        }
      })
    )
  }

  drop(event: CdkDragDrop<string[]>) {
    this.store.dispatch(FormActions.reorderQuestions({ prevIndex: event.previousIndex, currentIndex: event.currentIndex }))
  }


  ngOnDestroy(): void {
    this.store.dispatch(FormActions.clearCurrentForm());
  }

}
