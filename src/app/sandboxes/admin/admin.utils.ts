import { Config } from './models/config';
import { ContentType } from './models/content-type';
import { data } from './admin.data';

export class AdminSandbox {

    modelGroup: any[];
    modelGroupChild: any[];
    models: any[];

    constructor() {
        this.modelGroup = data.modelGroup;
        this.modelGroupChild = data.modelGroupChild;
        this.models = this.populate('config', 30);
        this.models = this.models.map(model => Object.assign({}, model, { json: this.populate('contentType', 20) }));
    }

    populate(name: string, quantity: number) {
        const records: any[] = [];
        for (let i = 0; i < quantity; i++) {
            records.push(
                Object.assign({}, data[name].attributes())
            );
        }
        return records;
    }
}

