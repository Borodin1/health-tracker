import { Dispatch } from 'redux';
import { IResponseRecord, IRecord } from '../../../types/index';

import { authActions } from './auth';
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

    setRecordScore: (recordedScore: IRecord | null) => {
        return {
            type:    scoreTypes.SET_RECORD_SCORE,
            payload: recordedScore,
        };
    },

    getRecordScore: (score: IResponseRecord) => {
        return {
            type:    scoreTypes.GET_RECORD_SCORE,
            payload: score,
        };
    },
    setUpdateScore: (record: IRecord) => {
        return {
            type:    scoreTypes.SET_UPDATE_SCORE,
            payload: record,
        };
    },
});

export const setScoreAsync = () => async (dispatch: Dispatch) => {
    try {
        dispatch(scoreActions.scoreIsLoading(true));
        const token = localStorage.getItem('token');

        const score = await api.tracker.getScore(token);

        dispatch(scoreActions.setScore(score));
    } catch (error) {
        const { message } = error as Error;
        dispatch(authActions.setError(message));
    } finally {
        dispatch(scoreActions.scoreIsLoading(false));
    }
};

export const setRecordScoreAsync = (record: IRecord, token: string | null) => async (dispatch: Dispatch) => {
    try {
        dispatch(scoreActions.scoreIsLoading(true));


        const answer = await api.tracker.createRecord(record, token);

        dispatch(scoreActions.setRecordScore(answer));
    } catch (error) {
        const { message } = error as Error;
        dispatch(authActions.setError(message));
    } finally {
        dispatch(scoreActions.scoreIsLoading(false));
    }
};


export const setUpdateScoreAsync
= (record: IRecord, recordHash: string) => async (dispatch: Dispatch) => {
    try {
        dispatch(scoreActions.scoreIsLoading(true));
        const token = localStorage.getItem('token');

        const score = await api.tracker.updateRecord(record, recordHash, token);

        dispatch(scoreActions.setUpdateScore(score));
    } catch (error) {
        const { message } = error as Error;
        dispatch(authActions.setError(message));
    } finally {
        dispatch(scoreActions.scoreIsLoading(false));
    }
};

export const getRecordScoreAsync = (kind: string) => async (dispatch: Dispatch) => {
    try {
        dispatch(scoreActions.scoreIsLoading(true));

        const token = localStorage.getItem('token');

        const { data } = await api.tracker.getRecord(kind, token);

        dispatch(scoreActions.getRecordScore(data));
    } catch (error) {
        const { message } = error as Error;
        dispatch(authActions.setError(message));
    } finally {
        dispatch(scoreActions.scoreIsLoading(false));
    }
};
