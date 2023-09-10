import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as QuestionActions from './questions.actions';
import { catchError, map, switchMap, withLatestFrom } from "rxjs/operators";
import { getQuestionState } from "./question.selectors";
import { QuestionModel, SubQuestionModel } from "src/shared/models/question.model";
import { formValidationToDtoAdaptor } from "../adaptors/validations.adaptor";
import { QuestionService } from "../../service/question.service";
import { of } from "rxjs";
import { QuestionFormTypes, State } from "./question.state.model";
import { Store } from "@ngrx/store";
import { QuestionAdaptorService } from "../../service/question-adaptor.service";


@Injectable()
export class QuestionEffects {
    constructor(private actions$: Actions, private questionService: QuestionService, private store: Store<State>, private qAdaptor: QuestionAdaptorService) { }

    postQuestion$ = createEffect(
        () => {
            return this.actions$.pipe(
                ofType(QuestionActions.postQuestion),
                withLatestFrom(this.store.select(getQuestionState)),
                switchMap(([action, state]) => {
                    const dto = new QuestionModel();
                    dto.title = state.title;
                    for (const sub of (state.formBasedQuestions as QuestionFormTypes<any>[])) {
                        const item = new SubQuestionModel(sub);
                        item.validations = formValidationToDtoAdaptor(sub.type, sub.validations);
                        dto.subQuestions.push(item);
                    }
                    return this.questionService.postQuestion(dto).pipe(
                        map(res => QuestionActions.postQuestionSuccess(res)),
                        catchError(err => of(QuestionActions.postQuestionError(err)))
                    )
                })
            )
        }
    );

    getQuestion$ = createEffect(
        () => {
            return this.actions$.pipe(
                ofType(QuestionActions.loadQuestion),
                switchMap(action => this.questionService.getQuestion(action.id)),
                map(res => {
                    this.store.dispatch(QuestionActions.UpdateQuestionTitle({title: res.result.title}));
                    for (const sub of res.result.subQuestions) {
                        this.qAdaptor.DtoToformBasedQuestionAdaptor(sub);
                    }

                    if (!res.hasError)
                        return QuestionActions.loadQuestionSuccess();
                    else
                        return QuestionActions.loadQuestionError();
                })
            )
        }
    );
}