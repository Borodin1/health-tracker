import { CustomQuestionSelector } from '../../../../elements/customQuestionSelector';

export const Fruits = () => {
    return (
        <>
            <CustomQuestionSelector
                question = 'Ты сегодня кушал фрукты?'
                answer1 = 'Да'
                answer2 = 'Нет' />
        </>
    );
};
