import { AnyAction } from 'redux';
import { IProfile } from '../../../types/index';
import { profileTypes } from '../types/profile';

export interface IProfileState{
    user: IProfile[] | null,
    isLoading: boolean
}

const initialState: IProfileState = {
    user:      null,
    isLoading: false,
};

export const profileReducers = (state = initialState, action: AnyAction) => {
    switch (action.type) {
        case profileTypes.SET_PROFILE: {
            return {
                ...state,
                user: action.payload,
            };
        }

        case profileTypes.IS_LOADING: {
            return {
                ...state,
                isLoading: action.payload,
            };
        }

        case profileTypes.UPDATE_PROFILE: {
            return {
                ...state,
                user: action.payload,
            };
        }

        default: {
            return state;
        }
    }
};
