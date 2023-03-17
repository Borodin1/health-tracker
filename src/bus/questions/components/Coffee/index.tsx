import { CustomQuestionSelector } from '../../../../elements/customQuestionSelector';

export const Coffee = () => {
    return (
        <>
            <CustomQuestionSelector
                question = 'Ты сегодня пил кофе?'
                answer1 = 'Я не пил совсем'
                answer2 = 'Выпил 1 стакан'
                answer3 = 'Выпил 2 или больше стаканов' />
        </>
    );
};
