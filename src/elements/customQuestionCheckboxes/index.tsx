// Core
import { useEffect, useState } from 'react';
import cx from 'classnames';

// styles
import { useDispatch, useSelector } from 'react-redux';
import styles from './styles/index.module.scss';
import { setRecordScoreAsync, setScoreAsync, setUpdateScoreAsync } from '../../lib/redux/actions/score';
import { getRecordedScore, getToken } from '../../lib/redux/selectors/auth';

export const CustomQuestionCheckboxes
= ({ title }: IPropsType) => {
    const dispatch = useDispatch();
    const token = useSelector(getToken);
    const recordedScore = useSelector(getRecordedScore);
    const [currentValue, setCurrentValue] = useState(0);

    const hash = recordedScore?.hash;
    const value = recordedScore?.value;

    const cupJSX = [...new Array(13)].map((_, index) => {
        const isSelected = currentValue > index;
        const cupCx = cx(styles.element, {
            [ styles.selected ]: isSelected,
        });

        const clickSelected = () => {
            const checkedKey = index + 1;
            const leftKey = index - 1;

            if (currentValue === checkedKey) {
                setCurrentValue(leftKey);
            } else {
                setCurrentValue(checkedKey);
            }
        };

        return (
            <button
                key = { String(index) }
                className = { cupCx }
                onClick = { clickSelected } />
        );
    });

    const waterAmount = currentValue && currentValue * 250;

    const onSubmit = () => {
        const record = {
            type:   window.location.pathname.slice(1),
            record: currentValue,
        };
        if (hash) {
            dispatch(setUpdateScoreAsync(record, token));
        } else {
            dispatch(setRecordScoreAsync(record, token));
        }
    };

    useEffect(() => {
        if (hash) {
            setCurrentValue(value);
        }
        if (recordedScore) {
            dispatch(setScoreAsync());
        }
    }, [recordedScore]);


    return (
        <div className = { styles.question }>
            <h1>{ title }</h1>
            <div className = { styles.elements }>
                { cupJSX }
                <span className = { styles.size }>{ waterAmount } мл</span>
            </div>
            <button
                onClick = { onSubmit }
                className = { styles.sendAnswer }>Ответить</button>
        </div>
    );
};

export interface IPropsType{
    title: string,

}
