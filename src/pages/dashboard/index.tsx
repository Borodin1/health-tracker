// Core
import { FC } from 'react';

// Views
import { observer } from 'mobx-react-lite';
import { Base } from '../../views/base';

// components
import { DashboardQuestions } from '../../bus/tracker/components/dashboard';


export const Dashboard: FC = observer(() => {
    return (
        <>
            <Base>
                <DashboardQuestions />
            </Base>
        </>
    );
});
