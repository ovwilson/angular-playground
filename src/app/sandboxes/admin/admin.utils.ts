import { Schema, Entity, FieldDef, ContentType } from './models/model';
import * as fromData from './admin.data';

export class AdminSandbox {

    _contentTypes: ContentType[];

    constructor() {
        // this.contentTypes = this.populate('Content', 30);
        this._contentTypes = fromData.contentTypes.map(model => Object.assign({}, model, { json: this.populate(model.title, 20) }));
    }

    get contentTypes() { return this._contentTypes; }

    populate(name: string, quantity: number) {
        const records: any[] = [];
        for (let i = 0; i < quantity; i++) {
            records.push(
                Object.assign({}, fromData.data[name].attributes())
            );
        }
        return records;
    }
}

