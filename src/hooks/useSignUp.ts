import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { authActions } from '../lib/redux/actions/auth';
import { api } from '../api/index';
import { IProfile } from '../types/index';

export const useSignUp = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const mutation = useMutation((payload: IProfile) => {
        return api.users.create(payload);
    });


    useEffect(() => {
        if (mutation.isSuccess) {
            const token = mutation?.data;
            dispatch(authActions.setToken(token));
            localStorage.setItem('token', token);
            navigate('/');
        }
    }, [mutation.isSuccess]);

    return mutation;
};
