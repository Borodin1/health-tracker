import { RootState } from '../init/store';

export const getToken = (state: RootState) => {
    return state.auth.token;
};

export const getScore = (state: RootState) => {
    return state.score.score;
};

export const getScoreisLoading = (state: RootState) => {
    return state.score.isLoading;
};
