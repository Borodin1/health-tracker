import { authTypes } from '../types/auth';

export const authActions = Object.freeze({
    setToken: (token: string) => {
        return {
            type:    authTypes.SET_TOKEN,
            payload: token,
        };
    },

    setError: (message: string) => {
        return {
            type:    authTypes.SET_ERROR,
            error:   true,
            payload: message,
        };
    },

    resetError: () => {
        return {
            type: authTypes.RESET_ERROR,
        };
    },

});
