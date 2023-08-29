import { QuestionTypesEnum } from "src/shared/models/question.model";

export interface QMultiSelectFormModel {
    id: string;
    type: QuestionTypesEnum;
    key: string;
    isRequired: boolean;
    values: string[];
    max: number;
}