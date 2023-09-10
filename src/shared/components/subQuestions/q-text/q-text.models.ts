import { QuestionFormTypes } from "src/app/layout/questions/create-question/state/question.state.model";
import { SubQuestionModel, ValidationModel, ValidationTypeEnum } from "src/shared/models/question.model";

export class QTextValidationModel {
    isRequired: string | null = null;
    max: number | null = null;
    min: number | null = null;
    regex: string | null = null;

    constructor(init: Partial<QTextValidationModel>) {
        Object.assign(this, init);
    }
}

// ? convert formbased validation model to dto
export const getTextValidationDto = (validations: QTextValidationModel) => {
    return [
        new ValidationModel(ValidationTypeEnum.isRequired, String(validations.isRequired)),
        new ValidationModel(ValidationTypeEnum.max, validations.max!.toString()),
        new ValidationModel(ValidationTypeEnum.min, validations.min!.toString()),
        new ValidationModel(ValidationTypeEnum.regex, validations.regex!)
    ];
}

// // ? convert dto to formbased validation model
// export const getTextFormBasedValidation = (sub: SubQuestionModel) => {

//     const isRequired = !!sub.validations.find(v => v.type == ValidationTypeEnum.isRequired)?.value;
//     const max = +sub.validations.find(v => v.type == ValidationTypeEnum.max)?.value!;
//     const min = +sub.validations.find(v => v.type == ValidationTypeEnum.min)?.value!;
//     const regex = sub.validations.find(v => v.type == ValidationTypeEnum.regex)?.value!;
//     const validations = {
//         isRequired,
//         max,
//         min,
//         regex
//     };
//     const subQuestion: QuestionFormTypes<QTextValidationModel> = new QuestionFormTypes<QTextValidationModel>(sub.id, sub.type, sub.key, sub.values, validations);



//     // return {
//     //     isRequired: isRequired,
//     //     max: max,
//     //     min: min,
//     //     regex: regex

//     // } as  QTextValidationModel;

// }