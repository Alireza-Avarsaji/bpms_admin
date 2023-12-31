import { FormBasedQuestion } from "src/app/layout/form/create-form/state/form.state.model";

export class FormModel {
    id: string = '';
    title: string = '';
    hint: string = '';
    questions: QuestionModel[] = [];
}

export class QuestionModel {
    id!: string;
    key!: string;
    type!: QuestionTypesEnum;
    values?: string[];
    validations!:  ValidationModel[];
    hint: string = '';
    order?: number;
    answerValue?: string;

    constructor(init?: FormBasedQuestion<any>) {
        this.values = [];
        this.key = init!.key;
        this.type = init!.type;
        this.values = init!.values;
        this.hint = init!.hint!;
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

