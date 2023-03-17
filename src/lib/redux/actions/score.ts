import { useSelector } from 'react-redux';
import { Dispatch } from 'redux';
import { authActions } from './auth';
import { getToken } from '../selectors/auth';
import { api } from '../../../api/index';
import { scoreTypes } from '../types/score';

export const scoreActions = Object.freeze({
    setScore: (score: number) => {
        return {
            type:    scoreTypes.SET_SCORE,
            payload: score,
        };
    },

    scoreIsLoading: (value: boolean) => {
        return {
            type:    scoreTypes.SET_SCORE_ISLOADING,
            payload: value,
        };
    },
});

export const setScoreAsync = () => async (dispatch: Dispatch) => {
    try {
        dispatch(scoreActions.scoreIsLoading(true));
        const token = useSelector(getToken);

        const score = await api.tracker.getScore(token);

        dispatch(scoreActions.setScore(score));
    } catch (error) {
        const { message } = error as Error;
        dispatch(authActions.setError(message));
    } finally {
        dispatch(scoreActions.scoreIsLoading(false));
    }
};
