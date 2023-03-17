import { CustomQuestionSelector } from '../../../../elements/customQuestionSelector';

export const Dinner = () => {
    return (
        <>
            <CustomQuestionSelector
                question = 'Ты сегодня ужинал?'
                answer1 = 'Я не ужинал'
                answer2 = 'У меня был легкий ужин'
                answer3 = 'Я очень плотно покушал' />
        </>
    );
};
