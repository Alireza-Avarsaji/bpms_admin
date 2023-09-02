import { ValidationModel, ValidationTypeEnum } from "src/shared/models/question.model";

export class QTimeValidationModel {
    isRequired: boolean | null = null; 
    maxH: number | null = null;
    maxM: number | null = null;
    minH: number | null = null;
    minM: number | null = null;

    constructor(init: Partial<QTimeValidationModel>) {
        Object.assign(this, init);
    }
}

// ? convert formbased validation model to dto
export const getTimeValidationDto = (validations: QTimeValidationModel) => {
    return [
        new ValidationModel(ValidationTypeEnum.isRequired, String(validations.isRequired)),
        new ValidationModel(ValidationTypeEnum.max, String(validations.maxH)),
        new ValidationModel(ValidationTypeEnum.max, String(validations.maxM)),
        new ValidationModel(ValidationTypeEnum.max, String(validations.minH)),
        new ValidationModel(ValidationTypeEnum.max, String(validations.minM)),
    ];
}