import { CustomQuestionSelector } from '../../../../elements/customQuestionSelector';
import { useGetRecord } from '../../../../hooks/useGetRecord';

export const Junk = () => {
    useGetRecord('junk');

    return (
        <>
            <CustomQuestionSelector
                question = 'Ты сегодня кушал фаст-фуд?'
                answer1 = 'Да'
                value1 = { true }
                answer2 = 'Нет'
                value2 = { false } />
        </>
    );
};
