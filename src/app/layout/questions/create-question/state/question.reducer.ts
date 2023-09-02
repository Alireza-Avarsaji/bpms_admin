import { createReducer, on } from "@ngrx/store";
import { IQuestionState } from "./question.state.model";
import * as QuestionActions from './questions.actions'
import { QuestionModel, SubQuestionModel } from "src/shared/models/question.model";
import { formValidationToDtoAdaptor } from "../adaptors/validations.adaptor";

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


            return {
                ...state,
                formBasedQuestions: updatedList
            }
        }
    ),

    // ? submit question 
    on(
        QuestionActions.SubmitQuestion,
        (state, action): IQuestionState => {

            const dto = new QuestionModel();

            for (const sub of state.formBasedQuestions) {
                const item = new SubQuestionModel(sub);
                item.validations = formValidationToDtoAdaptor(sub.type ,sub.validations);
                dto.options.push(item);
            }            

            return {
                ...state
            }
        }
    )

);


