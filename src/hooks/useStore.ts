// Core
import { useContext } from 'react';

// Other
import { Context } from '../lib/mobx/Provider';

export const useStore = () => {
    const store = useContext(Context);

    return store;
};
