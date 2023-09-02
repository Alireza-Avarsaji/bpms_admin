
export class QRangeFormModel {
    isRequired: boolean | null = null; 
    max: number | null = null;
    min: number | null = null;

    constructor(init: Partial<QRangeFormModel>) {
        Object.assign(this, init);
    }
}