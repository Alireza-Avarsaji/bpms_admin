import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IQuestionState } from "./models";

// ? question module feature selector
const getQuestionFeatureState = createFeatureSelector<IQuestionState>('questions');

// ? form Based questions list selector 
export const getFormBasedQuestions = createSelector(
    getQuestionFeatureState,
    state => state.formBasedQuestions
);