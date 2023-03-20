
import { CustomQuestionSelector } from '../../../../elements/customQuestionSelector';
import { useGetRecord } from '../../../../hooks/useGetRecord';

export const Fruits = () => {
    useGetRecord('fruits');

    return (
        <>
            <CustomQuestionSelector
                question = 'Ты сегодня кушал фрукты?'
                answer1 = 'Да'
                value1 = { true }
                answer2 = 'Нет'
                value2 = { false } />
        </>
    );
};
