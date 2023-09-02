import * as AppState from '../../../../state/app.state';
import { QuestionTypesEnum } from "src/shared/models/question.model";


// ? union type for various q types
// export type QuestionFormTypes =  QTextFormModel | QSingleSelectFormModel | QMultiSelectFormModel | QRangeFormModel | QTimeFormModel | QFileFormModel | QRadioFormModel;

// ? new version
export interface QuestionFormTypes<T> {
    id: string;
    type: QuestionTypesEnum;
    key: string;
    values?: string[];
    validations?: T;
}

// ? main question store slice model
export interface IQuestionState {
    formBasedQuestions: QuestionFormTypes<any>[];
}

// ? redefine the main state interface for handling lazy loading
export interface State extends AppState.State {
    questions: IQuestionState;
}


