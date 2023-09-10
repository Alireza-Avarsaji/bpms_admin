import { ValidationModel, ValidationTypeEnum } from "src/shared/models/question.model";

export class QFileValidationModel {
    isRequired: string | null = null; 
    maxSize: number | null = null;
    extension: string | null = null;

    constructor(init: Partial<QFileValidationModel>) {
        Object.assign(this, init);
    }
    
}

// ? convert formbased validation model to dto
export const getFileValidationDto = (validations: QFileValidationModel) => {
    return [
        new ValidationModel(ValidationTypeEnum.isRequired, String(validations.isRequired)),
        new ValidationModel(ValidationTypeEnum.max, String(validations.maxSize)),
        new ValidationModel(ValidationTypeEnum.extension, String(validations.extension))
    ];
}