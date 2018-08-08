export type FieldType = 'select' | 'text' | 'textarea' | 'radio' | 'person';

export interface Option {
    label: string;
    value: string;
}

export interface Schema {
    name: string;
    type: string;
}

export interface ModelAttribute {
    id?: string;
    title?: string;
    name?: string;
    label?: string;
    visible?: boolean;
    required?: boolean;
    filter?: boolean;
    type?: FieldType;
    description?: string;
    placeholder?: string;
    hint?: string;
    error?: string;
    options?: Option[];
    default?: string;
    schema?: Schema;
    validation?: any[];
}

export interface Entity<S, A> {
    [name: string]: { schema?: S, attributes?: A, data?: any[], seed?: () => any };
}

