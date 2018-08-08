import * as faker from 'faker';
import { Entity, ModelAttribute, Schema } from './models/model';

export const data: Entity<Schema[], ModelAttribute[]> = {
    'Schema': {
        schema: [],
        attributes: [
            { label: 'Name', name: 'name', visible: true, type: 'text' },
            { label: 'Type', name: 'type', visible: true, type: 'text' }
        ],
        data: [],
        seed: () => { }
    },
    'ContentType': {
        schema: [
            { name: 'title', type: 'String' },
            { name: 'description', type: 'String' },
            { name: 'tag', type: 'String' },
            { name: 'key', type: 'String' },
            { name: 'value', type: 'String' },
            { name: 'json', type: 'Mixed' }
        ],
        attributes: [
            { label: 'Title', name: 'title', visible: true, type: 'text', filter: false },
            { label: 'Description', name: 'description', visible: true, type: 'textarea', filter: false },
            { label: 'Tag', name: 'tag', visible: true, type: 'select', filter: true },
            { label: 'Key', name: 'key', visible: true, type: 'text', filter: true },
            { label: 'Value', name: 'value', visible: true, type: 'text', filter: true },
            { label: 'json', name: 'json', visible: true, type: 'textarea', filter: true }
        ],
        data: [
            {
                title: 'Rule', description: 'Rules are meant to be broken', key: 'Rule', json: []
            }
        ],
        seed: () => Object.assign({}, {
            title: faker.company.bsAdjective(),
            description: faker.lorem.paragraph(),
            tag: faker.company.bsNoun(),
            key: faker.company.bsNoun(),
            value: faker.company.catchPhrase(),
            json: []
        })
    },
    'Rule': {
        schema: [
            { name: 'title', type: 'String' },
            { name: 'description', type: 'String' },
            { name: 'order', type: 'Number' },
            { name: 'key', type: 'String' },
            { name: 'value', type: 'String' }
        ],
        attributes: [
            { label: 'Title', name: 'title', visible: true, type: 'text', filter: false, },
            { label: 'Key', name: 'key', visible: true, type: 'text', filter: true },
            { label: 'Value', name: 'value', visible: true, type: 'textarea', filter: true },
            { label: 'Description', name: 'description', visible: true, type: 'text', filter: true },
            { label: 'Order', name: 'order', visible: true, type: 'text', filter: true }
        ],
        data: [],
        seed: () => Object.assign({}, {
            title: faker.company.bsAdjective(),
            description: faker.lorem.paragraph(),
            key: faker.company.bsNoun(),
            value: faker.company.catchPhrase(),
            order: faker.random.number()
        })
    },
    'Folder': {
        schema: [
            { name: 'key', type: 'String' },
            { name: 'value', type: 'String' }
        ],
        attributes: [
            { label: 'Key', name: 'key', visible: true, type: 'text', filter: true },
            { label: 'Value', name: 'value', visible: true, type: 'text', filter: true }
        ],
        data: [],
        seed: () => Object.assign({}, {
            key: faker.company.bsAdjective(),
            value: faker.company.catchPhrase()
        })
    }
};
