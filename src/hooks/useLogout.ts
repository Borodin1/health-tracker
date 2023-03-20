import { useEffect } from 'react';
import { useMutation } from 'react-query';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { authActions } from '../lib/redux/actions/auth';
import { api } from '../api/index';
import { profileActions } from '../lib/redux/actions/profile';

export const useLogout = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const mutation = useMutation((token: string | null) => {
        return api.users.logout(token);
    });


    useEffect(() => {
        if (mutation.isSuccess) {
            dispatch(authActions.setToken(''));
            dispatch(profileActions.setProfile(null));

            navigate('/login');
        }
    }, [mutation.isSuccess]);

    return mutation;
};
