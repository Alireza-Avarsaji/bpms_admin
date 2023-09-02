import { QuestionTypesEnum } from "src/shared/models/question.model";

// export interface QMultiSelectFormModel {
//     id: string;
//     type: QuestionTypesEnum;
//     key: string;
//     isRequired: boolean;
//     values: string[];
//     max: number;
// }

export class QMultiSelectFormModel {
    isRequired: boolean | null = null;
    max: number | null = null;

    constructor(init: Partial<QMultiSelectFormModel>) {
        Object.assign(this, init);
    }
}