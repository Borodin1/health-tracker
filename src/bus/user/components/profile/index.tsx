// Core
import { yupResolver } from '@hookform/resolvers/yup';
import cx from 'classnames';
import { useForm } from 'react-hook-form';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { scoreActions } from '../../../../lib/redux/actions/score';
import { getProfile } from '../../../../lib/redux/selectors/profile';
// Components
import { Input } from '../../../../elements/customInput';

// Hooks
import { useDeleteScore } from '../../../../hooks/useDeleteScore';
import { useUpdateProfile } from '../../../../hooks/useUpdateProfile';

// types
import { IProfile } from '../../../../types';
import { schema } from './config';

// styles
import Styles from './styles/index.module.scss';

export const Profile: React.FC = () => {
    const profileInfo = useSelector(getProfile);
    const updateProfile = useUpdateProfile();
    const dispatch = useDispatch();
    const deleteScore = useDeleteScore();
    const form = useForm({
        mode:          'onTouched',
        resolver:      yupResolver(schema),
        defaultValues: {
            sex:      profileInfo?.sex,
            fname:    profileInfo?.fname,
            lname:    profileInfo?.lname,
            email:    profileInfo?.email,
            password: '',
            age:      profileInfo?.age,
            height:   profileInfo?.height,
            weight:   profileInfo?.weight,
        },
    });

    const genderM = cx(profileInfo?.sex === 'm' ? Styles.male : Styles.female, {
        [ Styles.selected ]: profileInfo?.sex,
    });

    const deleteAllRecord = async () => {
        const token = localStorage.getItem('token');
        await deleteScore.mutateAsync(token);
        dispatch(scoreActions.setScore(0));
        dispatch(scoreActions.setRecordScore(null));
    };


    const onSubmit = form.handleSubmit(async (data: IProfile) => {
        await updateProfile.mutateAsync(data);
    });

    return (
        <div className = { Styles.profile }>
            <h1>Профиль</h1>
            <div className = { Styles.gender }>
                <div className = { genderM }></div>
            </div>
            <div className = { Styles.inputRow }>
                <Input
                    label = 'Электропочта'
                    type = 'text'
                    register = { form.register('email') }
                    error = { form.formState.errors.email }
                    placeholder = 'Введите свой email' />
            </div>
            <div className = { Styles.inputRow }>
                <Input
                    label = 'Имя'
                    type = 'text'
                    register = { form.register('fname') }
                    error = { form.formState.errors.fname }
                    placeholder = 'Введите свое имя' />
            </div>

            <div className = { Styles.inputRow }>
                <Input
                    label = 'Имя'
                    type = 'text'
                    register = { form.register('lname') }
                    error = { form.formState.errors.lname }
                    placeholder = 'Введите свою фамилию' />
            </div>
            <div className = { Styles.inputRow }>
                <Input
                    label = 'Пароль'
                    type = 'password'
                    register = { form.register('password') }
                    error = { form.formState.errors.password }
                    placeholder = 'Введите свой пароль' />
            </div>
            <div className = { Styles.inputRow }>
                <Input
                    label = 'Возраст'
                    type = 'number'
                    register = { form.register('age') }
                    error = { form.formState.errors.age }
                    placeholder = 'Введите свой возраст' />
            </div>

            <div className = { Styles.inputRow }>
                <Input
                    label = 'Рост'
                    type = 'number'
                    register = { form.register('height') }
                    error = { form.formState.errors.height }

                    placeholder = 'Введите свой рост' />
            </div>

            <div className = { Styles.inputRow }>
                <Input
                    label = 'Вес'
                    type = 'number'
                    register = { form.register('weight') }
                    error = { form.formState.errors.weight }

                    placeholder = 'Введите свой вес' />
            </div>
            <div className = { Styles.controls }>
                <button
                    disabled = { !form.watch('password') }
                    className = { Styles.clearData }>Сбросить</button>
                <button
                    onClick = { onSubmit }
                    disabled = { !form.watch('password') }>Обновить</button>
            </div>
            <button
                onClick = { deleteAllRecord }
                className = { Styles.clearAllRecords }>Очистить все данные</button>
        </div>
    );
};

