import { QuestionTypesEnum } from "src/shared/models/question.model";

export interface QSingleSelectFormModel {
    id: string;
    type: QuestionTypesEnum;
    key: string;
    values: string[];
    isRequired: boolean;
}