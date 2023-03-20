
import { CustomQuestionSelector } from '../../../../elements/customQuestionSelector';
import { useGetRecord } from '../../../../hooks/useGetRecord';


export const Breakfast: React.FC = () => {
    useGetRecord('breakfast');

    return (
        <>
            <CustomQuestionSelector
                question = 'Ты сегодня завтракал?'
                answer1 = 'Я не завтракал'
                value1 = 'none'
                answer2 = 'У меня был легкий завтрак'
                value2 = 'light'
                answer3 = 'Я очень плотно покушал'
                value3 = 'heavy' />
        </>
    );
};
