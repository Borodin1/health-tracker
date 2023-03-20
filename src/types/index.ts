
export enum Sex {
    MALE = 'm',
    FEMALE = 'f',
}

export type ValueType = number | string | boolean;

export interface IProfileRequest{
    data: IProfile[]
}
export interface IProfile {
    fname: string;
    lname: string;
    email: string;
    password: string;
    age: number;
    sex: string,
    height: number;
    weight: number;
    created?: string
}

export interface IRecord {
    type: string;
    record: ValueType;
}

export interface IResponseRecord {
    hash: string;
    value: ValueType;
}

export interface ILoginFormShape{
    email: string
    password: string
}
