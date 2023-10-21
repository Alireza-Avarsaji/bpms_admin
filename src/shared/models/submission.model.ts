import { QuestionTypesEnum, ValidationModel } from "./question.model";

export class SubmissionModel {
    id!: string;
    userId!: string;
    userName!: string;
    formId!: string;
    createdAt!: string;
}

export class SubmissionDetailModel {
    id!: string;
    order!: number;
    key!: string;
    type!: QuestionTypesEnum;
    values!: string[];
    validations!: ValidationModel[];
    hint!: string;
    answerValue!: string;
}