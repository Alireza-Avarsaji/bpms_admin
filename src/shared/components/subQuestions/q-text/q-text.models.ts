export class QTextFormModel {
    isRequired: boolean | null = null; 
    max: number | null = null;
    min: number | null = null;
    regex: string | null = null;

    constructor(init: Partial<QTextFormModel>) {
        Object.assign(this, init);
    }
}