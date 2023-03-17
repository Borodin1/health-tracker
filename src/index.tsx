// Core
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { configure } from 'mobx';
import { Provider } from 'react-redux';

// Components
import { QueryClientProvider } from 'react-query';


// Instruments
import { RoutesComponent } from './navigation';
import { store } from './lib/redux/init/store';

// Styles
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import './theme/index.scss';
import { queryClient } from './lib/react-query';

configure({
    enforceActions:             'always',
    computedRequiresReaction:   true,
    observableRequiresReaction: true,
    reactionRequiresObservable: true,
});

render(
    <Provider store = { store }>
        <QueryClientProvider client = { queryClient }>
            <Router>
                <RoutesComponent />
            </Router>
        </QueryClientProvider>
    </Provider>,
    document.getElementById('root'),
);
