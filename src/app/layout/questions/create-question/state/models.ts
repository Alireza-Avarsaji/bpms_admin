import { QTextFormModel } from "src/shared/components/subQuestions/q-text/models";
import * as AppState from '../../../../state/app.state';


// ? union type for various q types
export type QuestionFormTypes = QTextFormModel;

// ? main question store slice model
export interface IQuestionState {
    formBasedQuestions: QuestionFormTypes[]
}

// ? redefine the main state interface for handling lazy loading
export interface State extends AppState.State {
    questions: IQuestionState
}


