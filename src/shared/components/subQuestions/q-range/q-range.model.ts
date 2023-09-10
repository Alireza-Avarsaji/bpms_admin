import { ValidationModel, ValidationTypeEnum } from "src/shared/models/question.model";

export class QRangeValidationModel {
    isRequired: string | null = null; 
    max: number | null = null;
    min: number | null = null;

    constructor(init: Partial<QRangeValidationModel>) {
        Object.assign(this, init);
    }
}

// ? convert formbased validation model to dto
export const getRangeValidationDto = (validations: QRangeValidationModel) => {
    return [
        new ValidationModel(ValidationTypeEnum.isRequired, String(validations.isRequired)),
        new ValidationModel(ValidationTypeEnum.max, String(validations.max)),
        new ValidationModel(ValidationTypeEnum.min, String(validations.min)),
    ];
}