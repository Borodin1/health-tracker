import { useDispatch, useSelector } from 'react-redux';
import { setScoreAsync } from '../lib/redux/actions/score';
import { getScoreisLoading, getScore } from '../lib/redux/selectors/auth';


export const useGetScore = () => {
    const dispatch = useDispatch();
    const scoreValue = useSelector(getScore);
    const scoreIsLoading = useSelector(getScoreisLoading);

    const setScore = () => dispatch(setScoreAsync());

    return {
        scoreValue, setScore, scoreIsLoading,
    };
};
