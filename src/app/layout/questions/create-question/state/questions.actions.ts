import { createAction, props } from "@ngrx/store";
import { QuestionFormTypes } from "./question.state.model";

export const AddSubQuestion = createAction(
    '[Question] AddSubQuestion',
    props<{ formValue: QuestionFormTypes }>()
);

export const UpdateSubQuestion = createAction(
    '[Question] UpdateSubQuestion',
    props<{ formValue: QuestionFormTypes }>()
);