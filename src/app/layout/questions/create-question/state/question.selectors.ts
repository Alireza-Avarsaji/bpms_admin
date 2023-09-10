import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IQuestionState } from "./question.state.model";

// ? question module feature selector
const getQuestionFeatureState = createFeatureSelector<IQuestionState>('questions');

// ? form Based questions list selector 
export const getQuestionState = createSelector(
    getQuestionFeatureState,
    state => state
);