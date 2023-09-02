export class QTimeFormModel {
    isRequired: boolean | null = null; 
    maxH: number | null = null;
    maxM: number | null = null;
    minH: number | null = null;
    minM: number | null = null;

    constructor(init: Partial<QTimeFormModel>) {
        Object.assign(this, init);
    }
}