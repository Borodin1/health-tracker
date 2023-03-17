import { useSelector } from 'react-redux';
import { Dispatch } from 'redux';
import { authActions } from './auth';
import { getToken } from '../selectors/auth';
import { api } from '../../../api/index';
import { profileTypes } from '../types/profile';
import { IProfile } from '../../../types/index';

export const profileActions = Object.freeze({
    setProfile: (user: IProfile | null) => {
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
});


export const setProfileAsync = () => async (dispatch: Dispatch) => {
    try {
        dispatch(profileActions.setIsLoading(true));
        const token = useSelector(getToken);

        const user = await api.users.getMe(token);

        dispatch(profileActions.setProfile(user));
    } catch (error) {
        const { message } = error as Error;
        dispatch(authActions.setError(message));
    } finally {
        dispatch(profileActions.setIsLoading(false));
    }
};
