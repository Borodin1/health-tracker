import { useMutation } from 'react-query';
import { api } from '../api/index';

export const useDeleteScore = () => {
    const mutation = useMutation((token: string | null) => {
        return api.tracker.removeAllRecords(token);
    });


    return mutation;
};
