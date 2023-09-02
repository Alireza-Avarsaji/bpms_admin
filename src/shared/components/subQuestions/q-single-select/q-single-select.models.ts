import { QuestionTypesEnum } from "src/shared/models/question.model";

// export interface QSingleSelectFormModel {
//     id: string;
//     type: QuestionTypesEnum;
//     key: string;
//     values: string[];
//     isRequired: boolean;
// }

export class QSingleSelectFormModel {
    isRequired: boolean | null = null;

    constructor(init: Partial<QSingleSelectFormModel>) {
        Object.assign(this, init);
    }
}