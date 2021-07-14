export enum Sex {
    MALE = 'm',
    FEMALE = 'f',
}

export type ValueType = number | string | boolean;

export interface IProfile {
    fname: string;
    lname: string;
    email: string;
    password: string;
    age: number;
    sex: string,
    height: number;
    weight: number;
}

export interface IRecord {
    type: string;
    record: ValueType;
}

export interface IResponseRecord {
    hash: string;
    value: ValueType;
}
