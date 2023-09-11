import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IQuestionState } from "./question.state.model";

// ? question module feature selector
const getQuestionFeatureState = createFeatureSelector<IQuestionState>('questions');

// ? form Based questions list selector 
export const getQuestionState = createSelector(
    getQuestionFeatureState,
    state => state
);

// ? checks if all sub questions are valid
export const getQuestionIsValid = createSelector(
    getQuestionFeatureState,
    state => (state.formBasedQuestions.every(s => s.isValid)) && (state.formBasedQuestions.length > 0) && !!state.title
);