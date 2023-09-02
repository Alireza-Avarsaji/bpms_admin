export class QDateFormModel {
    isRequired: boolean | null = null; 
    max: number | null = null;
    min: number | null = null;

    constructor(init: Partial<QDateFormModel>) {
        Object.assign(this, init);
    }
}