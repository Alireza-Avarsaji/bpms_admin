import { QuestionTypesEnum } from "src/shared/models/question.model";

export interface QTimeFormModel {
    id: string;
    type: QuestionTypesEnum;
    key: string;
    isRequired: boolean;
    maxH: number;
    maxM: number;
    minH: number;
    minM: number;
}