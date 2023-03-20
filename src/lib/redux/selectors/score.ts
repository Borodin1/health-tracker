import { RootState } from '../init/store';

export const getRecord = (state: RootState) => {
    return state.score.getRecord;
};
