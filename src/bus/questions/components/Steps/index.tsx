import { CustomQuestionInput } from '../../../../elements/customQuestionInput';

export const Steps = () => {
    return (
        <>
            <CustomQuestionInput
                questions = 'Сколько шагов ты сегодня прошел?'
                type = 'number'
                placeholder = 'Введите свое число' />
        </>
    );
};
