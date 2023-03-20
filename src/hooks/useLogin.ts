import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { AxiosError } from 'axios';
import { useEffect } from 'react';
import { api } from '../api/index';
import { authActions } from '../lib/redux/actions/auth';
import { ILoginFormShape } from '../types';

export const useLogin = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const mutation = useMutation((credentials: ILoginFormShape) => {
        return api.users.login(credentials);
    },
    {
        onError(error: AxiosError) {
            const { response } = error;

            if (response?.status === 401) {
                dispatch(authActions.setError('Неверный логин или пароль. Проверьте корректность введённых данных.'));
            } else {
                dispatch(
                    authActions.setError(
                        'Ошибка запроса. Повторите через несколько минут или обратитесь к администратору.',
                    ),
                );
            }
        },
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
