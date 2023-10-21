import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as FormActions from './form.actions';
import { catchError, map, switchMap, withLatestFrom } from "rxjs/operators";
import { getFormState } from "./form.selectors";
import { FormModel, QuestionModel } from "src/shared/models/question.model";
import { formValidationToDtoAdaptor } from "../adaptors/validations.adaptor";
import { FormService } from "../../service/form.service";
import { of } from "rxjs";
import { FormBasedQuestion, State } from "./form.state.model";
import { Store } from "@ngrx/store";
import { QuestionAdaptorService } from "../../service/question-adaptor.service";


@Injectable()
export class QuestionEffects {
    constructor(private actions$: Actions,
        private questionService: FormService,
        private store: Store<State>,
        private qAdaptor: QuestionAdaptorService
    ) { }

    postForm$ = createEffect(
        () => {
            return this.actions$.pipe(
                ofType(FormActions.postForm),
                withLatestFrom(this.store.select(getFormState)),
                switchMap(([action, state]) => {
                    const dto = new FormModel();
                    dto.title = state.title;
                    dto.hint = state.hint;

                    for (const sub of (state.formBasedQuestions as FormBasedQuestion<any>[])) {
                        const item = new QuestionModel(sub);
                        item.validations = formValidationToDtoAdaptor(sub.type, sub.validations);
                        dto.questions.push(item);
                    }
                    return this.questionService.postForm(dto).pipe(
                        map(res => {
                            if (!res.hasError)
                                return FormActions.postFormSuccess();
                            else
                                return FormActions.postFormError();
                        }),
                        catchError(() => of(FormActions.postFormError()))
                    )
                })
            )
        }
    );

    updateForm$ = createEffect(
        () => {
            return this.actions$.pipe(
                ofType(FormActions.updateForm),
                withLatestFrom(this.store.select(getFormState)),
                switchMap(([action, state]) => {
                    const dto = new FormModel();
                    dto.title = state.title;
                    dto.hint = state.hint;
                    dto.id = state.id;

                    for (const sub of (state.formBasedQuestions as FormBasedQuestion<any>[])) {
                        const item = new QuestionModel(sub);
                        item.validations = formValidationToDtoAdaptor(sub.type, sub.validations);
                        dto.questions.push(item);
                    }
                    return this.questionService.updateFormById(dto).pipe(
                        map(res => {
                            if (!res.hasError)
                                return FormActions.updateFormSuccess();
                            else
                                return FormActions.updateFormError();
                        }),
                        catchError(() => of(FormActions.updateFormError()))
                    )
                })
            )
        }
    );

    getForm$ = createEffect(
        () => {
            return this.actions$.pipe(
                ofType(FormActions.loadForm),
                switchMap(action => this.questionService.getFormById(action.id)),
                map(res => {
                    this.store.dispatch(FormActions.UpdateFormTitle({ title: res.result.title }));
                    this.store.dispatch(FormActions.UpdateFormHint({ hint: res.result.hint }));
                    this.store.dispatch(FormActions.UpdateFormId({ id: res.result.id }));
                    for (const sub of res.result.questions) {
                        this.qAdaptor.DtoToformBasedQuestionAdaptor(sub);
                    }

                    if (!res.hasError)
                        return FormActions.loadFormSuccess();
                    else
                        return FormActions.loadFormError();
                })
            )
        }
    );
}