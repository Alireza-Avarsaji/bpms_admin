import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { QuestionFormTypes, State } from '../create-question/state/question.state.model';
import { QuestionTypesEnum, SubQuestionModel, ValidationTypeEnum } from 'src/shared/models/question.model';
import { QTextValidationModel } from 'src/shared/components/subQuestions/q-text/q-text.models';
import * as QuestionActions from '../create-question/state/questions.actions';
import { QSingleSelectValidationModel } from 'src/shared/components/subQuestions/q-single-select/q-single-select.models';
import { QMultiSelectValidationModel } from 'src/shared/components/subQuestions/q-multi-select/q-multi-select.model';
import { QTimeValidationModel } from 'src/shared/components/subQuestions/q-time/q-time.model';
import { QRangeValidationModel } from 'src/shared/components/subQuestions/q-range/q-range.model';
import { QRadioValidationModel } from 'src/shared/components/subQuestions/q-radio/q-radio.model';
import { QFileValidationModel } from 'src/shared/components/subQuestions/q-file/q-file.model';
import { QDateValidationModel } from 'src/shared/components/subQuestions/q-date/q-date.model';

@Injectable({
  providedIn: 'root'
})
export class QuestionAdaptorService {

  constructor(private store: Store<State>) { }

  DtoToformBasedQuestionAdaptor = (sub: SubQuestionModel) => {
    switch (sub.type) {
      case QuestionTypesEnum.text:
        return this.getTextFormBasedValidation(sub);
      case QuestionTypesEnum.single_select:
        return this.getSingleSelectFormBasedValidation(sub);
      case QuestionTypesEnum.multi_select:
        return this.getMultiSelectFormBasedValidation(sub);
      case QuestionTypesEnum.time:
        return this.getTimeFormBasedValidation(sub);
      case QuestionTypesEnum.range:
        return this.getRangeFormBasedValidation(sub);
      case QuestionTypesEnum.radio:
        return this.getRadioFormBasedValidation(sub);
      case QuestionTypesEnum.file:
        return this.getFileFormBasedValidation(sub);
      case QuestionTypesEnum.date:
        return this.getDateFormBasedValidation(sub);
    }
  }

  // ? convert dto to formbased validation model
  getTextFormBasedValidation = (sub: SubQuestionModel) => {

    
    
    const isRequired = sub.validations.find(v => v.type == ValidationTypeEnum.isRequired)?.value!;
    const max = +sub.validations.find(v => v.type == ValidationTypeEnum.max)?.value!;
    const min = +sub.validations.find(v => v.type == ValidationTypeEnum.min)?.value!;
    const regex = sub.validations.find(v => v.type == ValidationTypeEnum.regex)?.value!;
    const validations = {
      isRequired,
      max,
      min,
      regex
    };
    const subQuestion: QuestionFormTypes<QTextValidationModel> = new QuestionFormTypes<QTextValidationModel>(sub.id, sub.type, sub.key, sub.values, validations);
    this.store.dispatch(QuestionActions.AddSubQuestion({ formValue: subQuestion }));
  }

  // ? convert dto to formbased validation model
  getSingleSelectFormBasedValidation = (sub: SubQuestionModel) => {

    const isRequired = sub.validations.find(v => v.type == ValidationTypeEnum.isRequired)?.value!;
    const validations = {
      isRequired
    };
    const subQuestion: QuestionFormTypes<QSingleSelectValidationModel> = new QuestionFormTypes<QSingleSelectValidationModel>(sub.id, sub.type, sub.key, sub.values, validations);
    this.store.dispatch(QuestionActions.AddSubQuestion({ formValue: subQuestion }));
  }

  // ? convert dto to formbased validation model
  getMultiSelectFormBasedValidation = (sub: SubQuestionModel) => {

    const isRequired = sub.validations.find(v => v.type == ValidationTypeEnum.isRequired)?.value!;
    const max = +sub.validations.find(v => v.type == ValidationTypeEnum.max)?.value!;
    const validations = {
      isRequired,
      max,
    };
    const subQuestion: QuestionFormTypes<QMultiSelectValidationModel> = new QuestionFormTypes<QMultiSelectValidationModel>(sub.id, sub.type, sub.key, sub.values, validations);
    this.store.dispatch(QuestionActions.AddSubQuestion({ formValue: subQuestion }));
  }

  // ? convert dto to formbased validation model
  getTimeFormBasedValidation = (sub: SubQuestionModel) => {

    const isRequired = sub.validations.find(v => v.type == ValidationTypeEnum.isRequired)?.value!;
    const maxH = +sub.validations.find(v => v.type == ValidationTypeEnum.maxH)?.value!;
    const maxM = +sub.validations.find(v => v.type == ValidationTypeEnum.maxM)?.value!;
    const minH = +sub.validations.find(v => v.type == ValidationTypeEnum.minH)?.value!;
    const minM = +sub.validations.find(v => v.type == ValidationTypeEnum.minM)?.value!;
    const validations = {
      isRequired,
      maxH,
      maxM,
      minH,
      minM
    };
    const subQuestion: QuestionFormTypes<QTimeValidationModel> = new QuestionFormTypes<QTimeValidationModel>(sub.id, sub.type, sub.key, sub.values, validations);
    this.store.dispatch(QuestionActions.AddSubQuestion({ formValue: subQuestion }));
  }

  // ? convert dto to formbased validation model
  getRangeFormBasedValidation = (sub: SubQuestionModel) => {

    const isRequired = sub.validations.find(v => v.type == ValidationTypeEnum.isRequired)?.value!;
    const max = +sub.validations.find(v => v.type == ValidationTypeEnum.max)?.value!;
    const min = +sub.validations.find(v => v.type == ValidationTypeEnum.min)?.value!;
    const validations = {
      isRequired,
      max,
      min
    };
    const subQuestion: QuestionFormTypes<QRangeValidationModel> = new QuestionFormTypes<QRangeValidationModel>(sub.id, sub.type, sub.key, sub.values, validations);
    this.store.dispatch(QuestionActions.AddSubQuestion({ formValue: subQuestion }));
  }

  // ? convert dto to formbased validation model
  getRadioFormBasedValidation = (sub: SubQuestionModel) => {

    const isRequired = sub.validations.find(v => v.type == ValidationTypeEnum.isRequired)?.value!;
    const validations = {
      isRequired
    };
    const subQuestion: QuestionFormTypes<QRadioValidationModel> = new QuestionFormTypes<QRadioValidationModel>(sub.id, sub.type, sub.key, sub.values, validations);
    this.store.dispatch(QuestionActions.AddSubQuestion({ formValue: subQuestion }));
  }

  // ? convert dto to formbased validation model
  getFileFormBasedValidation = (sub: SubQuestionModel) => {

    const isRequired = sub.validations.find(v => v.type == ValidationTypeEnum.isRequired)?.value!;
    const maxSize = +sub.validations.find(v => v.type == ValidationTypeEnum.max)?.value!;
    const extension = sub.validations.find(v => v.type == ValidationTypeEnum.extension)?.value!;
    const validations = {
      isRequired,
      maxSize,
      extension
    };
    const subQuestion: QuestionFormTypes<QFileValidationModel> = new QuestionFormTypes<QFileValidationModel>(sub.id, sub.type, sub.key, sub.values, validations);
    this.store.dispatch(QuestionActions.AddSubQuestion({ formValue: subQuestion }));
  }

    // ? convert dto to formbased validation model
    getDateFormBasedValidation = (sub: SubQuestionModel) => {

      const isRequired = sub.validations.find(v => v.type == ValidationTypeEnum.isRequired)?.value!;
      const max = sub.validations.find(v => v.type == ValidationTypeEnum.max)?.value!;
      const min = sub.validations.find(v => v.type == ValidationTypeEnum.min)?.value!;
      const validations = {
        isRequired,
        max,
        min
      };
      const subQuestion: QuestionFormTypes<QDateValidationModel> = new QuestionFormTypes<QDateValidationModel>(sub.id, sub.type, sub.key, sub.values, validations);
      this.store.dispatch(QuestionActions.AddSubQuestion({ formValue: subQuestion }));
    }


}
