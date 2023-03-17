import { CustomQuestionSelector } from '../../../../elements/customQuestionSelector';

export const Vegetables = () => {
    return (
        <>
            <CustomQuestionSelector
                question = 'Ты сегодня кушал овощи?'
                answer1 = 'Да'
                answer2 = 'Нет' />
        </>
    );
};
