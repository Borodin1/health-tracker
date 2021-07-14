// Core
import axios, { AxiosResponse } from 'axios';

// Config
import { root } from './config';

// Types
import { IRecord, IResponseRecord } from '../types';

export const tracker = {
    getScore: async (token: string | null) => {
        if (!token) {
            throw new Error('токен не указан');
        }

        const { data } = await axios.get<AxiosResponse<number>>(`${root}/reports`, {
            headers: {
                authorization: `Bearer ${token}`,
            },
        });

        return data.data;
    },
    getRecord: async (type: string, token: string | null) => {
        if (!token) {
            throw new Error('токен не указан');
        }

        const params = new URLSearchParams({
            kind: type,
        });

        const { data } =  await axios.get<AxiosResponse<IResponseRecord>>(`${root}/records?${params}`, {
            headers: {
                authorization: `Bearer ${token}`,
            },
        });

        return data;
    },
    createRecord: async ({ type, record }: IRecord, token: string | null) => {
        if (!token) {
            throw new Error('токен не указан');
        }

        const params = new URLSearchParams({
            kind: type,
        });

        const { data } = await axios.post(`${root}/records?${params}`, {
            value: record,
        }, {
            headers: {
                authorization: `Bearer ${token}`,
            },
        });

        return data;
    },
    updateRecord: async ({ type, record }: IRecord, hash: string, token: string | null) => {
        if (!token) {
            throw new Error('токен не указан');
        }

        const params = new URLSearchParams({
            kind: type,
        });

        const { data } = await axios.put(`${root}/records/${hash}/?${params}`, {
            value: record,
        }, {
            headers: {
                authorization: `Bearer ${token}`,
            },
        });

        return data;
    },
    removeAllRecords: async (token: string | null) => {
        if (!token) {
            throw new Error('токен не указан');
        }

        await axios.delete(`${root}/reports/reset`, {
            method:  'DELETE',
            headers: {
                authorization: `Bearer ${token}`,
            },
        });
    },
};
