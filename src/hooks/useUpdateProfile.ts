import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useMutation } from 'react-query';
import { profileActions } from '../lib/redux/actions/profile';
import { api } from '../api/index';
import { IProfile } from '../types/index';

export const useUpdateProfile = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const mutation = useMutation((info: IProfile) => {
        const token = localStorage.getItem('token');

        return api.users.updateMe(info, token);
    });

    useEffect(() => {
        if (mutation.data?.data) {
            dispatch(profileActions.updateProfile(mutation.data?.data));
            navigate('/');
        }
    }, [mutation.isSuccess]);

    return mutation;
};
