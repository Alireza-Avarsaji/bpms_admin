import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IFormState } from "./form.state.model";

// ? question module feature selector
const getFormsFeatureState = createFeatureSelector<IFormState>('forms');

// ? form Based questions list selector 
export const getFormState = createSelector(
    getFormsFeatureState,
    state => state
);

// ? checks if all sub questions are valid
export const getFormIsValid = createSelector(
    getFormsFeatureState,
    state => (state.formBasedQuestions.every(s => s.isValid)) && (state.formBasedQuestions.length > 0) && !!state.title
);

export const getPostFormSuccess = createSelector(getFormsFeatureState, state => state.postFormSuccess);
export const getPostFormError = createSelector(getFormsFeatureState, state => state.postFormError);
export const getUpdateFormSuccess = createSelector(getFormsFeatureState, state => state.updateFormSuccess);
export const getUpdateFormError = createSelector(getFormsFeatureState, state => state.updateFormError);