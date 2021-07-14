// Core
import { FC } from 'react';

// Views
import { observer } from 'mobx-react-lite';
import { Base } from '../../views/base';

export const Dashboard: FC = observer(() => {
    return (
        <>
            <Base>
                <h1>Дешборд</h1>
            </Base>
        </>
    );
});
