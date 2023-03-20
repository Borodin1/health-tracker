// Core
import { useEffect, useState } from 'react';
import cx from 'classnames';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import {
    setRecordScoreAsync, setScoreAsync, setUpdateScoreAsync,
} from '../../lib/redux/actions/score';
import { getRecordedScore, getToken } from '../../lib/redux/selectors/auth';

// styles
import styles from './styles/index.module.scss';

// types
import { ValueType } from '../../types';


export const  CustomQuestionSelector = ({
    question, answer1, answer2, answer3, value1, value2, value3,
}: IQuestionSelectorProps) => {
    const dispatch = useDispatch();
    const recordedScore = useSelector(getRecordedScore);
    const token = useSelector(getToken);
    const hash = recordedScore?.hash;
    const value = recordedScore?.value;

    const [valueRecord, setValueRecord] = useState<ValueType>();

    const classNamesA1 = cx(styles.answer, {
        [ styles.selected ]: valueRecord === value1,
    });

    const classNamesA2 = cx(styles.answer, {
        [ styles.selected ]: valueRecord === value2,
    });

    const classNamesA3 = cx(styles.answer, {
        [ styles.selected ]: valueRecord === value3,
    });


    const  onSubmit = () => {
        if (valueRecord) {
            const record = {
                type:   window.location.pathname.slice(1),
                record: valueRecord,
            };
            if (hash) {
                dispatch(setUpdateScoreAsync(record, hash));
            } else {
                dispatch(setRecordScoreAsync(record, token));
            }
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
            <h1>{ question }</h1>
            <div className = { styles.answers }>
                <span
                    className = { classNamesA1 } onClick = { () => setValueRecord(value1) }>
                    { answer1 }
                </span>
                <span
                    className = { classNamesA2 } onClick = { () => setValueRecord(value2) }
                    defaultValue = 'light'>
                    { answer2 }
                </span>
                { answer3
                    ? <span
                        className = { classNamesA3 } onClick = { () => setValueRecord(value3) }
                        defaultValue = 'heavy'>{ answer3 }</span>
                    : null }
            </div>
            <button
                onClick = { () => onSubmit() }
                disabled = { !valueRecord }
                className = { styles.sendAnswer }>Ответить</button>
        </div>
    );
};


interface IQuestionSelectorProps{
    question: string,
    answer1: string,
    answer2: string,
    answer3?: string,
    value1: ValueType,
    value2: ValueType,
    value3?: ValueType,

}
