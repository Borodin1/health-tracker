// Core
import { FC, ReactElement, useEffect } from 'react';
import cx from 'classnames';
import {
    Link, matchPath, useLocation, useNavigate,
} from 'react-router-dom';

// Book
import { useDispatch, useSelector } from 'react-redux';
import { book } from '../../navigation/book';

// Styles
import Styles from './styles/index.module.scss';

// Elements
import { Spinner } from '../../elements/spinner';

// Hooks
import { useStore } from '../../hooks';
import { setScoreAsync } from '../../lib/redux/actions/score';
import { getScore, getToken } from '../../lib/redux/selectors/auth';
import {  setProfileAsync } from '../../lib/redux/actions/profile';
import { getProfile } from '../../lib/redux/selectors/profile';
import { UserProfile } from '../../elements/user';

export const Base: FC<IPropTypes> = (props) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const token = useSelector(getToken);
    const scoreValue = useSelector(getScore);
    const profileInfo = useSelector(getProfile);
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
    const score = scoreValue;

    // TODO; необходимо динамически менять значения в зависимости от выбранного при регистрации пола
    const avatarCX = cx([
        Styles.sidebar, {
            [ Styles.male ]:   profileInfo?.sex === 'm',
            [ Styles.female ]: profileInfo?.sex === 'f',
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


    useEffect(() => {
        if (!token) {
            navigate('/login');
        }
        dispatch(setScoreAsync());
        dispatch(setProfileAsync());
    }, [scoreValue]);


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
                    <UserProfile />
                </div>
                <div className = { contentCX }>
                    { children }
                    { widgetJSX }
                </div>
            </div>
        </section>
    );
};

interface IPropTypes {
    children: ReactElement | ReactElement[];
    center?: boolean;
    disabledWidget?: boolean;
}
