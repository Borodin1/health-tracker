// Core
import { Link, useNavigate } from 'react-router-dom';
import cx from 'classnames';
import { useEffect } from 'react';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { getProfile } from '../../lib/redux/selectors/profile';
import { setProfileAsync } from '../../lib/redux/actions/profile';

// styles
import Styles from './styles.module.scss';
// hooks
import { useLogout } from '../../hooks/useLogout';

export const UserProfile = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const localToken = localStorage.getItem('token');
    const logout = useLogout();
    const profileInfo = useSelector(getProfile);
    const userAvatarCX = cx([
        Styles.avatar, {
            [ Styles.male ]:   profileInfo?.sex === 'm',
            [ Styles.female ]: profileInfo?.sex === 'f',
        },
    ]);

    const onSubmit = async () => {
        await logout.mutateAsync(localToken);
        navigate('/login');
    };

    const userName = profileInfo ? `${profileInfo.fname}  ${profileInfo.lname}` : '';


    useEffect(() => {
        dispatch(setProfileAsync());
    }, []);

    return (
        <div className = { userAvatarCX }>
            <div className = { Styles.column }>
                <Link className = { Styles.name } to = '/profile'>
                    { userName }
                </Link>
                <button onClick = { onSubmit } className = { Styles.logout }>Выйти</button>
            </div>
        </div>
    );
};
