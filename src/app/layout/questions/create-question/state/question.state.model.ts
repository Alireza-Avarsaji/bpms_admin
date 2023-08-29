import { QTextFormModel } from "src/shared/components/subQuestions/q-text/models";
import * as AppState from '../../../../state/app.state';
import { QSingleSelectFormModel } from "src/shared/components/subQuestions/q-single-select/models";
import { QMultiSelectComponent } from "src/shared/components/subQuestions/q-multi-select/q-multi-select.component";
import { QMultiSelectFormModel } from "src/shared/components/subQuestions/q-multi-select/q-multi-select.model";
import { QRangeFormModel } from "src/shared/components/subQuestions/q-range/q-range.model";
import { QTimeFormModel } from "src/shared/components/subQuestions/q-time/q-time.model";


// ? union type for various q types
export type QuestionFormTypes = QTextFormModel | QSingleSelectFormModel | QMultiSelectFormModel | QRangeFormModel | QTimeFormModel;

// ? main question store slice model
export interface IQuestionState {
    formBasedQuestions: QuestionFormTypes[];
}

// ? redefine the main state interface for handling lazy loading
export interface State extends AppState.State {
    questions: IQuestionState;
}


