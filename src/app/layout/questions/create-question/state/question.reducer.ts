import { createReducer, on } from "@ngrx/store";
import { IQuestionState } from "./models";
import * as QuestionActions from './questions.actions'

const initialState: IQuestionState = {
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

    // ? update a sub question
    on(
        QuestionActions.UpdateSubQuestion,
        (state, action): IQuestionState => {

            const updatedList = [...state.formBasedQuestions];
            const el = updatedList.find(e => e.id == action.formValue.id)!;
            const index = updatedList.indexOf(el);
            updatedList[index] = action.formValue;
            
            // let sub = state.formBasedQuestions.find(s => s.id == action.formValue.id);
            // console.log(sub);
            // sub = action.formValue;
            // console.log(sub);

            return {
                ...state,
                formBasedQuestions: updatedList
            }
        }
    )

)