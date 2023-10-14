import { createReducer, on } from "@ngrx/store";
import { IFormState } from "./form.state.model";
import * as FormActions from './form.actions'
import { moveItemInArray } from "@angular/cdk/drag-drop";


const initialState: IFormState = {
    title: '',
    hint: '',
    id: '',
    formBasedQuestions: [],
    postFormSuccess: false,
    postFormError: false,
    updateFormSuccess: false,
    updateFormError: false,
}

export const formReducer = createReducer(initialState,


    // ? add a question
    on(
        FormActions.AddQuestion,
        (state, action): IFormState => {

            const newList = [...state.formBasedQuestions];
            newList.push(action.formValue);

            return {
                ...state,
                formBasedQuestions: newList
            }
        }
    ),

    // ? remove a sub question
    on(
        FormActions.RemoveQuestion,
        (state, action): IFormState => {

            const id = action.id;
            const stateCopy = [...state.formBasedQuestions];
            const newState = stateCopy.filter(i => i.id != id);

            return {
                ...state,
                formBasedQuestions: newState
            }
        }
    ),

    // ? update a sub question
    on(
        FormActions.UpdateQuestion,
        (state, action): IFormState => {
            const updatedList = [...state.formBasedQuestions];
            const el = updatedList.find(e => e.id == action.formValue.id)!;
            const index = updatedList.indexOf(el);
            updatedList[index] = action.formValue;
            return {
                ...state,
                formBasedQuestions: updatedList
            }
        }
    ),

    // ? update a form id
    on(
        FormActions.UpdateFormId,
        (state, action): IFormState => {
            return {
                ...state,
                id: action.id
            }
        }
    ),

    // ? update a form title
    on(
        FormActions.UpdateFormTitle,
        (state, action): IFormState => {
            return {
                ...state,
                title: action.title
            }
        }
    ),

    // ? update a form hint
    on(
        FormActions.UpdateFormHint,
        (state, action): IFormState => {
            return {
                ...state,
                hint: action.hint
            }
        }
    ),


    // ? post form success
    on(
        FormActions.postFormSuccess,
        (state): IFormState => {

            return {
                ...state,
                postFormSuccess: true
            }
        }
    ),

    // ? post form error
    on(
        FormActions.postFormError,
        (state): IFormState => {

            return {
                ...state,
                postFormError: true
            }
        }
    ),

    // ? update form success
    on(
        FormActions.updateFormSuccess,
        (state): IFormState => {

            return {
                ...state,
                updateFormSuccess: true
            }
        }
    ),

    // ? update form error
    on(
        FormActions.updateFormError,
        (state): IFormState => {

            return {
                ...state,
                updateFormError: true
            }
        }
    ),

    // ? load question (has effect)
    on(
        FormActions.loadForm,
        (state, action): IFormState => {
            return {
                ...state,
            }
        }
    ),

    // ? load question success
    on(
        FormActions.loadFormSuccess,
        (state): IFormState => {
            return {
                ...state
            }
        }
    ),

    // ? load question error
    on(
        FormActions.loadFormError,
        (state): IFormState => {
            return {
                ...state,
            }
        }
    ),

    // ? reorder form questions
    on(
        FormActions.reorderQuestions,
        (state, action): IFormState => {
            const clone = [...state.formBasedQuestions];
            moveItemInArray(clone, action.prevIndex, action.currentIndex);
            return {
                ...state,
                formBasedQuestions: clone
            }
        }
    ),

    on(
        FormActions.clearCurrentForm,
        (state) => {
            return {
                ...state,
                formBasedQuestions: initialState.formBasedQuestions,
                hint: initialState.hint,
                id: initialState.id,
                postFormError: initialState.postFormError,
                postFormSuccess: initialState.postFormSuccess,
                title: initialState.title,
                updateFormError: initialState.updateFormError,
                updateFormSuccess: initialState.updateFormSuccess
            }
        }
    ),



);


