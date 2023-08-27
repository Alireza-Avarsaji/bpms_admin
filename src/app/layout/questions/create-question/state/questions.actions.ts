import { createAction, props } from "@ngrx/store";
import { QuestionFormTypes } from "./models";

export const AddSubQuestion = createAction(
    '[Question] AddSubQuestion',
    props<{ formValue: QuestionFormTypes }>()
);

export const UpdateSubQuestion = createAction(
    '[Question] UpdateSubQuestion',
    props<{ formValue: QuestionFormTypes }>()
);