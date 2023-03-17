import { CustomQuestionInput } from '../../../../elements/customQuestionInput';

export const Sleep = () => {
    return (
        <>
            <CustomQuestionInput
                questions = 'Сколько часов ты сегодня спал?'
                type = 'number'
                placeholder = 'Введите свое число' />
        </>
    );
};
