import { createReducer, on } from "@ngrx/store";
import { IQuestionState } from "./question.state.model";
import * as QuestionActions from './questions.actions'
import { QuestionModel, SubQuestionModel } from "src/shared/models/question.model";
import { formValidationToDtoAdaptor } from "../adaptors/validations.adaptor";

const initialState: IQuestionState = {
    title: '',
    formBasedQuestions: []
}

export const questionReducer = createReducer(initialState,


    // ? add a sub question
    on(
        QuestionActions.AddSubQuestion,
        (state, action): IQuestionState => {

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
        QuestionActions.RemoveSubQuestion,
        (state, action): IQuestionState => {

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
        QuestionActions.UpdateSubQuestion,
        (state, action): IQuestionState => {
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

    // ? update a sub question
    on(
        QuestionActions.UpdateQuestionTitle,
        (state, action): IQuestionState => {
            return {
                ...state,
                title: action.title
            }
        }
    ),

    // ? post question(has effect)
    on(
        QuestionActions.postQuestion,
        (state, action): IQuestionState => {
            return {
                ...state
            }
        }
    ),

    // ? post question success
    on(
        QuestionActions.postQuestionSuccess,
        (state, action): IQuestionState => {
            return {
                ...state,
                title: action.title
            }
        }
    ),

    // ? load question (has effect)
    on(
        QuestionActions.loadQuestion,
        (state, action): IQuestionState => {
            return {
                ...state,
            }
        }
    ),

    // ? load question success
    on(
        QuestionActions.loadQuestionSuccess,
        (state): IQuestionState => {
            return {
                ...state,
            }
        }
    ),

    // ? load question error
    on(
        QuestionActions.loadQuestionError,
        (state): IQuestionState => {
            return {
                ...state,
            }
        }
    ),



);


