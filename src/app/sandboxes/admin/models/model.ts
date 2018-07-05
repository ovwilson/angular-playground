type ModelType = 'select' | 'text' | 'textarea' | 'radio';

interface Option {
    label: string;
    value: string;
}

export interface ContentType {
    id?: string;
    title?: string;
    description?: string;
    tag?: string;
    key?: string;
    value?: string;
    json?: any[];
}

export interface FieldDef {
    id?: string;
    title?: string;
    name?: string;
    label?: string;
    visible?: boolean;
    required?: boolean;
    filter?: boolean;
    type?: ModelType;
    description?: string;
    placeholder?: string;
    hint?: string;
    error?: string;
    options?: Option[];
    default?: string;
}

export interface Schema {
    name: string;
    type: string;
    validation?: any[];
    // pre(this: any): () => any;
    // post(this: any): () => any;
}

export interface Entity<V> {
    ids: string[];
    entities: { [name: string]: V };
}

