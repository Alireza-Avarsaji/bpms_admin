import { QuestionFormTypes } from "src/app/layout/questions/create-question/state/question.state.model";

export class QuestionModel {
    id: string = '';
    title: string = '';
    hint: string = '';
    subQuestions: SubQuestionModel[] = [];
}

export class SubQuestionModel {
    id!: string;
    key!: string;
    type!: QuestionTypesEnum;
    values?: string[];
    validations!:  ValidationModel[];
    hint: string = '';

    constructor(init?: QuestionFormTypes<any>) {
        this.values = [];
        this.key = init!.key;
        this.type = init!.type;
        this.values = init!.values;
    }
}

export interface INameValue {
    name: string;
    value: any;
}

export enum QuestionTypesEnum {
    text,
    single_select,
    multi_select,
    range,
    date,
    time,
    file,
    radio
}

export class ValidationModel {
    type!: ValidationTypeEnum;
    value!: string;

    constructor(type: ValidationTypeEnum, value: string) {
        this.type = type;
        this.value = value;
    }
}

export enum ValidationTypeEnum {
    max,
    min,
    isRequired,
    multi_select_length,
    file_size,
    regex,
    extension,
    maxH,
    minH,
    maxM,
    minM
}

