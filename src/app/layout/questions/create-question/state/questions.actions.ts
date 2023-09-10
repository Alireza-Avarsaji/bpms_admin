import { createAction, props } from "@ngrx/store";
import { QuestionFormTypes } from "./question.state.model";

export const AddSubQuestion = createAction(
    '[Question] AddSubQuestion',
    props<{ formValue: QuestionFormTypes<any> }>()
);

export const RemoveSubQuestion = createAction(
    '[Question] RemoveSubQuestion',
    props<{ id: string }>()
);

export const UpdateSubQuestion = createAction(
    '[Question] UpdateSubQuestion',
    props<{ formValue: QuestionFormTypes<any> }>()
);

export const UpdateQuestionTitle = createAction(
    '[Question] UpdateQuestionTitle',
    props<{ title: string }>()
);

export const postQuestion = createAction(
    '[Question] postQuestion'
);

export const postQuestionSuccess = createAction(
    '[Question] postQuestionSuccess',
    props<any>()
);

export const postQuestionError = createAction(
    '[Question] postQuestionError',
    props<any>()
);

export const loadQuestion = createAction(
    '[Question] loadQuestion',
    props<{id: string}>()
);

export const loadQuestionSuccess = createAction(
    '[Question] loadQuestionSuccess'
);

export const loadQuestionError = createAction(
    '[Question] loadQuestionError'
);