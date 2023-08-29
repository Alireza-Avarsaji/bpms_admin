import { QuestionTypesEnum } from "src/shared/models/question.model";

export interface QDateFormModel {
    id: string;
    type: QuestionTypesEnum;
    key: string;
    isRequired: boolean;
    max: number;
    min: number;
}