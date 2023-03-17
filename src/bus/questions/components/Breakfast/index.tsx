import { CustomQuestionSelector } from '../../../../elements/customQuestionSelector';

export const Breakfast: React.FC = () => {
    return (
        <>
            <CustomQuestionSelector
                question = 'Ты сегодня завтракал?'
                answer1 = 'Я не завтракал'
                answer2 = 'У меня был легкий завтрак'
                answer3 = 'Я очень плотно покушал' />
        </>
    );
};
