import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getRecordScoreAsync } from '../lib/redux/actions/score';
import { getRecord } from '../lib/redux/selectors/score';

export const useGetRecord = (type: string) => {
    const dispatch = useDispatch();
    const record = useSelector(getRecord);

    useEffect(() => {
        if (typeof record === 'undefined') {
            dispatch(getRecordScoreAsync(type));
        }
    }, [record, type]);
};
