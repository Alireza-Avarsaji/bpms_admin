export class QFileFormModel {
    isRequired: boolean | null = null; 
    maxSize: number | null = null;
    extension: string | null = null;

    constructor(init: Partial<QFileFormModel>) {
        Object.assign(this, init);
    }
}