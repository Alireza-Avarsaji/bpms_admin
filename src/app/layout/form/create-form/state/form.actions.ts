import { createAction, props } from "@ngrx/store";
import { FormBasedQuestion } from "./form.state.model";

export const AddQuestion = createAction(
    '[Form] AddQuestion',
    props<{ formValue: FormBasedQuestion<any> }>()
);

export const RemoveQuestion = createAction(
    '[Form] RemoveQuestion',
    props<{ id: string }>()
);

export const UpdateQuestion = createAction(
    '[Form] UpdateQuestion',
    props<{ formValue: FormBasedQuestion<any> }>()
);

export const UpdateFormTitle = createAction(
    '[Form] UpdateFormTitle',
    props<{ title: string }>()
);

export const UpdateFormHint = createAction(
    '[Form] UpdateFormHint',
    props<{ hint: string }>()
);

export const UpdateFormId = createAction(
    '[Form] UpdateFormId',
    props<{ id: string }>()
);

export const postForm = createAction(
    '[Form] postForm'
);


export const postFormSuccess = createAction(
    '[Form] postFormSuccess'
);

export const postFormError = createAction(
    '[Form] postFormError'
);

export const updateForm = createAction(
    '[Form] updateForm'
);

export const updateFormSuccess = createAction(
    '[Form] updateFormSuccess'
);

export const updateFormError = createAction(
    '[Form] updateFormError'
);

export const loadForm = createAction(
    '[Form] loadForm',
    props<{id: string}>()
);

export const loadFormSuccess = createAction(
    '[Form] loadFormSuccess'
);

export const loadFormError = createAction(
    '[Form] loadFormError'
);

export const reorderQuestions = createAction(
    '[Form] reorderQuestions',
    props<{prevIndex: number ,currentIndex: number}>()
);

export const clearCurrentForm = createAction(
    '[form] clearCurrentForm'
);