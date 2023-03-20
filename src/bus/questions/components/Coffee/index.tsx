import { CustomQuestionSelector } from '../../../../elements/customQuestionSelector';
import { useGetRecord } from '../../../../hooks/useGetRecord';

export const Coffee = () => {
    useGetRecord('coffee');


    return (
        <>
            <CustomQuestionSelector
                question = 'Ты сегодня пил кофе?'
                answer1 = 'Я не пил совсем'
                value1 = 'none'
                answer2 = 'Выпил 1 стакан'
                value2 = 'light'
                answer3 = 'Выпил 2 или больше стаканов'
                value3 = 'heavy' />
        </>
    );
};
