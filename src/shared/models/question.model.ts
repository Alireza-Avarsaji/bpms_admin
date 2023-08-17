
export class QuestionModel {
    title!: string;
    options!: SubQuestionModel[];
}

export class SubQuestionModel {
    key!: string;
    type!: QuestionTypesEnum;
    values!: string[];
    validations!:  ValidationModel[];
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
    type!: ValidationTypeEnum;;
    value!: string;
}

export enum ValidationTypeEnum {
    max_min,
    isRequired,
    multi_select_length,
    file_size,
    regex
}

