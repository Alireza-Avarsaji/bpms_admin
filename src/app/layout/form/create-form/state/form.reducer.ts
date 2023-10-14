import { createReducer, on } from "@ngrx/store";
import { IFormState } from "./form.state.model";
import * as FormActions from './form.actions'
import { moveItemInArray } from "@angular/cdk/drag-drop";


const initialState: IFormState = {
    title: '',
    hint: '',
    formBasedQuestions: []
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

    // // ? post question(has effect)
    // on(
    //     FormActions.postForm,
    //     (state, action): IFormState => {
    //         return {
    //             ...state
    //         }
    //     }
    // ),

    // ? post question success
    on(
        FormActions.postFormSuccess,
        (state, action): IFormState => {
            return {
                ...state,
                title: action.title
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
                ...state,
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

        // ? load question error
        on(
            FormActions.reorder,
            (state, action): IFormState => {
                const clone = [...state.formBasedQuestions];
                moveItemInArray(clone, action.prevIndex, action.currentIndex);
                return {
                    ...state,
                    formBasedQuestions: clone
                }
            }
        ),



);


