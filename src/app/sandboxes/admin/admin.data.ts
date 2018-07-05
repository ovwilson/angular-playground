import * as faker from 'faker';
import { Schema, Entity, FieldDef, ContentType } from './models/model';

export const fieldDefs: Entity<FieldDef[]> = {
    ids: ['Schema', 'Rule', 'ContentType', 'Folder'],
    entities: {
        'Schema': [
            { label: 'Name', name: 'name', visible: true, type: 'text', filter: true },
            { label: 'Type', name: 'type', visible: true, type: 'text', filter: true }
        ],
        'ContentType': [
            { label: 'Title', name: 'title', visible: true, type: 'text', filter: false },
            { label: 'Description', name: 'description', visible: true, type: 'textarea', filter: false },
            { label: 'Tag', name: 'tag', visible: true, type: 'select', filter: true },
            { label: 'Key', name: 'key', visible: true, type: 'text', filter: true },
            { label: 'Value', name: 'value', visible: true, type: 'text', filter: true },
            { label: 'json', name: 'json', visible: true, type: 'textarea', filter: true }
        ],
        'Rule': [
            { label: 'Title', name: 'title', visible: true, type: 'text', filter: false },
            { label: 'Key', name: 'key', visible: true, type: 'text', filter: true },
            { label: 'Value', name: 'value', visible: true, type: 'textarea', filter: true },
            { label: 'Description', name: 'description', visible: true, type: 'text', filter: true },
            { label: 'Order', name: 'order', visible: true, type: 'text', filter: true }
        ],
        'Folder': [
            { label: 'Key', name: 'key', visible: true, type: 'text', filter: true },
            { label: 'Value', name: 'value', visible: true, type: 'text', filter: true }
        ]
    }
};

export const schemas: Entity<Schema[]> = {
    ids: ['ContentType'],
    entities: {
        'ContentType': [
            { name: 'id', type: 'String' },
            { name: 'title', type: 'String' },
            { name: 'description', type: 'String' },
            { name: 'tag', type: 'String' },
            { name: 'key', type: 'String' },
            { name: 'value', type: 'String' },
            { name: 'json', type: 'Mixed' }
        ]
    }
};

export const contentTypes: ContentType[] = [
    { id: '', title: 'Rule', description: 'Rules description', tag: 'Rule', key: '', value: '', json: [] },
    { id: '', title: 'Folder', description: 'Folder description', tag: 'Folder', key: '', value: '', json: [] }
];

export const data: any = {
    'Rule': {
        attributes: () => Object.assign({}, {
            title: faker.company.bsAdjective(),
            description: faker.lorem.paragraph(),
            key: faker.company.bsNoun(),
            value: faker.company.catchPhrase(),
            order: faker.random.number()
        })
    },
    'Folder': {
        attributes: () => Object.assign({}, {
            key: faker.company.bsAdjective(),
            value: faker.company.catchPhrase()
        })
    }
};
