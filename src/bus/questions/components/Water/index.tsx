
import  { CustomQuestionCheckboxes }  from '../../../../elements/customQuestionCheckboxes';
import { useGetRecord } from '../../../../hooks/useGetRecord';

export const Water = () => {
    useGetRecord('water');


    return (
        <>
            <CustomQuestionCheckboxes title = 'Сколько воды ты сегодня выпил?' />
        </>
    );
};
