
import { CustomQuestionInput } from '../../../../elements/customQuestionInput';
import { useGetRecord } from '../../../../hooks/useGetRecord';

export const Steps = () => {
    useGetRecord('steps');


    return (
        <>
            <CustomQuestionInput
                questions = 'Сколько шагов ты сегодня прошел?'
                type = 'number'
                placeholder = 'Введите свое число' />
        </>
    );
};
