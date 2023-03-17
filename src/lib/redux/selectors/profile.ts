import { RootState } from '../init/store';

export const getProfile = (state: RootState): string => {
    return state.profile.user;
};

export const getIsLoading = (state: RootState): string => {
    return state.profile.isLoading;
};
