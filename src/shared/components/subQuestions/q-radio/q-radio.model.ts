export class QRadioFormModel {
    isRequired: boolean | null = null; 
    constructor(init: Partial<QRadioFormModel>) {
        Object.assign(this, init);
    }
}