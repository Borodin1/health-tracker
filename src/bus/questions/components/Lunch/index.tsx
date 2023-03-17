import { CustomQuestionSelector } from '../../../../elements/customQuestionSelector';

export const Lunch = () => {
    return (
        <>
            <CustomQuestionSelector
                question = 'Ты сегодня обедал?'
                answer1 = 'Я не обедал'
                answer2 = 'У меня был легкий обед'
                answer3 = 'Я очень плотно покушал' />
        </>
    );
};
