import * as faker from 'faker';

class DataTableSandbox {

    modelGroup: any[];
    models: any[];

    constructor() {
        this.modelGroup = [
            { label: 'First Name', name: 'firstName', visible: true },
            { label: 'Last Name', name: 'lastName', visible: true }
        ];
        this.models = this.onPopulateData();
    }

    onPopulateData() {
        const records = [];
        const quantity = 10;
        for (let i = 0; i < quantity; i++) {
            records.push(Object.assign({}, {
                firstName: faker.name.firstName(),
                lastName: faker.name.lastName()
            }));
        }
        return records;
    }

}

export const utils =  DataTableSandbox;
