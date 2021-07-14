// Core
import { FC, ReactElement } from 'react';
import cx from 'classnames';
import {
    Link, matchPath, useLocation,
} from 'react-router-dom';
import { observer } from 'mobx-react-lite';

// Book
import { book } from '../../navigation/book';

// Styles
import Styles from './styles/index.module.scss';

// Elements
import { Spinner } from '../../elements/spinner';

// Hooks
import { useStore } from '../../hooks';


export const Base: FC<IPropTypes> = observer((props) => {
    const { pathname } = useLocation();
    const { uiStore } = useStore();

    const { isLoading } = uiStore;

    const {
        children,
        center,
        disabledWidget,
    } = props;

    const isExact = matchPath(book.root.url, pathname);

    // TODO; необходимо заменить на получаемые с сервера данные
    const score = 50;

    // TODO; необходимо динамически менять значения в зависимости от выбранного при регистрации пола
    const avatarCX = cx([
        Styles.sidebar, {
            [ Styles.male ]:   true,
            [ Styles.female ]: false,
        },
    ]);

    const contentCX = cx(Styles.content, {
        [ Styles.center ]: center,
    });

    const loaderCX = isLoading && (
        <Spinner isLoading = { isLoading } />
    );

    const widgetJSX = score !== null && !disabledWidget && (
        <div className = { Styles.widget }>
            <span className = { Styles.title }>Life Score</span>
            <div className = { Styles.module }>
                <span className = { Styles.score } style = { { bottom: `${score}%` } }>{ score }</span>
                <div className = { Styles.progress }>
                    <div className = { Styles.fill } style = { { height: `${score}%` } } />
                </div>
                <span className = { cx([Styles.label, Styles.level1]) }>Off Track</span>
                <span className = { cx([Styles.label, Styles.level2]) }>Imbalanced</span>
                <span className = { cx([Styles.label, Styles.level3]) }>Balanced</span>
                <span className = { cx([Styles.label, Styles.level4]) }>Healthy</span>
                <span className = { cx([Styles.label, Styles.level5]) }>Perfect Fit</span>
            </div>
        </div>
    );

    const homeLinkJSX = !isExact && (
        <Link to = { book.root.url } className = { Styles.homeLink }>На главную</Link>
    );

    return (
        <section className = { Styles.profile }>
            <div className = { avatarCX }>
                { loaderCX }
            </div>
            <div className = { Styles.wrap }>
                <div className = { Styles.header }>
                    <div>
                        { homeLinkJSX }
                    </div>
                    <h1>Profile component</h1>
                </div>
                <div className = { contentCX }>
                    { children }
                    { widgetJSX }
                </div>
            </div>
        </section>
    );
});

interface IPropTypes {
    children: ReactElement | ReactElement[];
    center?: boolean;
    disabledWidget?: boolean;
}
