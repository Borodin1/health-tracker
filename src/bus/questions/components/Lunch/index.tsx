
import { CustomQuestionSelector } from '../../../../elements/customQuestionSelector';
import { useGetRecord } from '../../../../hooks/useGetRecord';

export const Lunch = () => {
    useGetRecord('lunch');

    return (
        <>
            <CustomQuestionSelector
                question = 'Ты сегодня обедал?'
                answer1 = 'Я не обедал'
                value1 = 'none'
                answer2 = 'У меня был легкий обед'
                value2 = 'light'
                answer3 = 'Я очень плотно покушал'
                value3 = 'heavy' />
        </>
    );
};
