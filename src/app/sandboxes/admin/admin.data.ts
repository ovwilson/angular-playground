import * as faker from 'faker';

export const data = {
    'config': {
        attributes: () => Object.assign({}, {
            title: faker.company.bsAdjective(),
            description: faker.lorem.paragraph(),
            tag: faker.company.bsNoun(),
            key: faker.commerce.productAdjective(),
            value: faker.company.catchPhrase(),
            json: []
        })
    },
    'contentType': {
        attributes: () => Object.assign({}, {
            key: faker.company.bsAdjective(),
            value: faker.company.catchPhrase()
        })
    },
    'modelGroup': [
        { label: 'Title', name: 'title', visible: true, type: 'text', filter: false },
        { label: 'Description', name: 'description', visible: true, type: 'textarea', filter: false },
        { label: 'Tag', name: 'tag', visible: true, type: 'select', filter: true },
        { label: 'Key', name: 'key', visible: true, type: 'text', filter: true },
        { label: 'Value', name: 'value', visible: true, type: 'text', filter: true },
        { label: 'json', name: 'json', visible: true, type: 'textarea', filter: true }
    ],
    'modelGroupChild': [
        { label: 'Key', name: 'key', visible: true, type: 'text', filter: true },
        { label: 'Value', name: 'value', visible: true, type: 'text', filter: true }
     ]
};
