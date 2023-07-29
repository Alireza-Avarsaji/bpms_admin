export class QuestionModel {
    title!: string;
    options!: OptionsModel[];
}

export class OptionsModel {
    key!: string;
    type!: OptionTypeEnum;
    values!: string[];
    validations!:  ValidationModel[];
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


export enum OptionTypeEnum {
    text,
    single_select,
    multi_select,
    range,
    date,
    time,
    file,
    radio
}