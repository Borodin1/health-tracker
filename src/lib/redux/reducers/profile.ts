import { AnyAction } from 'redux';
import { profileTypes } from '../types/profile';

const initialState = {
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

        default: {
            return state;
        }
    }
};
