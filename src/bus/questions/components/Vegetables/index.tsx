
import { CustomQuestionSelector } from '../../../../elements/customQuestionSelector';
import { useGetRecord } from '../../../../hooks/useGetRecord';

export const Vegetables = () => {
    useGetRecord('vegetables');

    return (
        <>
            <CustomQuestionSelector
                question = 'Ты сегодня кушал овощи?'
                answer1 = 'Да'
                value1 = { true }
                answer2 = 'Нет'
                value2 = { false } />
        </>
    );
};
