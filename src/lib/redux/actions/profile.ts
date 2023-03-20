import { Dispatch } from 'redux';
import { IProfile, IProfileRequest } from '../../../types/index';

import { authActions } from './auth';
import { api } from '../../../api/index';
import { profileTypes } from '../types/profile';


export const profileActions = Object.freeze({
    setProfile: (user: IProfileRequest[] | null) => {
        return {
            type:    profileTypes.SET_PROFILE,
            payload: user,
        };
    },

    setIsLoading: (value: boolean) => {
        return {
            type:    profileTypes.IS_LOADING,
            payload: value,
        };
    },
    updateProfile: (user: IProfile) => {
        return {
            type:    profileTypes.UPDATE_PROFILE,
            payload: user,
        };
    },
});


export const setProfileAsync = () => async (dispatch: Dispatch) => {
    try {
        dispatch(profileActions.setIsLoading(true));

        const token = localStorage.getItem('token');

        const user = await api.users.getMe(token);

        dispatch(profileActions.setProfile(user));
    } catch (error) {
        const { message } = error as Error;
        dispatch(authActions.setError(message));
    } finally {
        dispatch(profileActions.setIsLoading(false));
    }
};
