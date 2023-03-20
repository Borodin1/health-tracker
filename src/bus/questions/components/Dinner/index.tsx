import { CustomQuestionSelector } from '../../../../elements/customQuestionSelector';
import { useGetRecord } from '../../../../hooks/useGetRecord';


export const Dinner = () => {
    useGetRecord('dinner');

    return (
        <>
            <CustomQuestionSelector
                question = 'Ты сегодня ужинал?'
                answer1 = 'Я не ужинал'
                value1 = 'none'
                answer2 = 'У меня был легкий ужин'
                value2 = 'light'
                answer3 = 'Я очень плотно покушал'
                value3 = 'heavy' />
        </>
    );
};
