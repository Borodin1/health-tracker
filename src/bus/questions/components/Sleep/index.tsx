
import { CustomQuestionInput } from '../../../../elements/customQuestionInput';
import { useGetRecord } from '../../../../hooks/useGetRecord';

export const Sleep = () => {
    useGetRecord('sleep');

    return (
        <>
            <CustomQuestionInput
                questions = 'Сколько часов ты сегодня спал?'
                type = 'number'
                placeholder = 'Введите свое число' />
        </>
    );
};
