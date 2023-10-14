import * as AppState from '../../../../state/app.state';
import { QuestionTypesEnum } from "src/shared/models/question.model";

export class FormBasedQuestion<T> {
    id: string = '';
    type!: QuestionTypesEnum;
    key: string = '';
    values?: string[];
    validations?: T;
    isValid: boolean = false;
    hint?: string;

    constructor(id?: string, type?: QuestionTypesEnum, key?: string, hint?: string, isValid?: boolean, values?: string[], validations?: T) {
        this.id = id!;
        this.type = type!;
        this.key = key!;
        this.hint = hint!;
        this.isValid = isValid!;
        this.values = values!;
        this.validations = validations!;
    }
}

// ? main question store slice model
export interface IFormState {
    title: string;
    hint: string;
    id: string;
    formBasedQuestions: FormBasedQuestion<any>[];
    postFormSuccess: boolean;
    postFormError: boolean;
    updateFormSuccess: boolean;
    updateFormError: boolean;
}

// ? redefine the main state interface for handling lazy loading
export interface State extends AppState.State {
    forms: IFormState;
}


