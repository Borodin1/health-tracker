// Core
import { useEffect, useState } from 'react';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { setRecordScoreAsync, setScoreAsync, setUpdateScoreAsync } from '../../lib/redux/actions/score';
import { getRecordedScore, getToken } from '../../lib/redux/selectors/auth';

// styles
import styles from './styles/index.module.scss';

export const CustomQuestionInput = ({ questions, type, placeholder }: IQuestionInputProps) => {
    const [valueRecord, setValueRecord] = useState('');
    const dispatch = useDispatch();
    const recordedScore = useSelector(getRecordedScore);
    const token = useSelector(getToken);

    const hash = recordedScore?.hash;
    const value = recordedScore?.value;
    const handleSubmit = () => {
        const record = {
            type:   window.location.pathname.slice(1),
            record: valueRecord,
        };
        if (hash) {
            dispatch(setUpdateScoreAsync(record, token));
        } else {
            dispatch(setRecordScoreAsync(record, token));
        }
    };

    useEffect(() => {
        if (recordedScore) {
            dispatch(setScoreAsync());
        }
        if (hash) {
            setValueRecord(value);
        }
    }, [recordedScore]);


    return (

        <div className = { styles.question }>
            <h1>{ questions }</h1>
            <div className = { styles.inputRow }>
                <input
                    type = { type }
                    onChange = { (event) => setValueRecord(event.target.value) }
                    placeholder = { placeholder } />
            </div>
            <button
                onClick = { handleSubmit }
                className = { styles.sendAnswer }>Ответить</button>
        </div>
    );
};


interface IQuestionInputProps{
    questions: string,
    type: string,
    placeholder: string
}
