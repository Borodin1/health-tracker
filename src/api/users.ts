// Core
import axios, { AxiosResponse } from 'axios';

// Config
import { root } from './config';

// Types
import { IProfile } from '../types';

export const users = {
    getMe: async (token: string | null): Promise<IProfile> => {
        if (!token) {
            throw new Error('токен не указан');
        }

        const { data } = await axios.get<IProfile>(`${root}/profile`, {
            headers: {
                authorization: `Bearer ${token}`,
            },
        });

        return data;
    },
    create: async (payload: IProfile): Promise<string> => {
        const { data } = await axios.post<AxiosResponse<string>>(`${root}/users`, payload);

        return data.data;
    },
    updateMe: async (payload: IProfile, token: string | null) => {
        if (!token) {
            throw new Error('токен не указан');
        }

        const { data } = await axios.put<AxiosResponse<IProfile>>(`${root}/users`, payload, {
            headers: {
                authorization: `Bearer ${token}`,
            },
        });

        return data;
    },
    login: async (credentials: string): Promise<string> => {
        const { data } = await axios.get<AxiosResponse<string>>(`${root}/login`, {
            headers: {
                authorization: `Basic ${credentials}`,
            },
        });

        return data.data;
    },
    logout: async (token: string | null): Promise<void> => {
        if (!token) {
            throw new Error('токен не указан');
        }

        await axios.get(`${root}/logout`, {
            headers: {
                authorization: `Bearer ${token}`,
            },
        });
    },
};
