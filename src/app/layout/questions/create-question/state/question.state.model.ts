import { QTextFormModel } from "src/shared/components/subQuestions/q-text/q-text.models";
import * as AppState from '../../../../state/app.state';
import { QSingleSelectFormModel } from "src/shared/components/subQuestions/q-single-select/q-single-select.models";
import { QMultiSelectFormModel } from "src/shared/components/subQuestions/q-multi-select/q-multi-select.model";
import { QRangeFormModel } from "src/shared/components/subQuestions/q-range/q-range.model";
import { QTimeFormModel } from "src/shared/components/subQuestions/q-time/q-time.model";
import { QFileFormModel } from "src/shared/components/subQuestions/q-file/q-file.model";
import { QRadioFormModel } from "src/shared/components/subQuestions/q-radio/q-radio.model";
import { QuestionTypesEnum } from "src/shared/models/question.model";


// ? union type for various q types
// export type QuestionFormTypes =  QTextFormModel | QSingleSelectFormModel | QMultiSelectFormModel | QRangeFormModel | QTimeFormModel | QFileFormModel | QRadioFormModel;

// ? new version
export interface QuestionFormTypes<T> {
    id: string;
    type: QuestionTypesEnum;
    key: string;
    values?: string[];
    validators?: T;
}

// ? main question store slice model
export interface IQuestionState {
    formBasedQuestions: QuestionFormTypes<any>[];
}

// ? redefine the main state interface for handling lazy loading
export interface State extends AppState.State {
    questions: IQuestionState;
}


