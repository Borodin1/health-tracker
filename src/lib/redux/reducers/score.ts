import { AnyAction } from 'redux';
import { scoreTypes } from '../types/score';

const initialState = {
    score:     null,
    isLoading: false,
};


export const scoreReducers = (state = initialState, action: AnyAction) => {
    switch (action.type) {
        case scoreTypes.SET_SCORE: {
            return {
                ...state,
                score: action.payload,
            };
        }

        case scoreTypes.SET_SCORE_ISLOADING: {
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
