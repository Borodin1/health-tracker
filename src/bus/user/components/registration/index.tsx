// Core
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import cx from 'classnames';

// Components
import { Input } from '../../../../elements/customInput';
import { schema } from './config';

// styles
import styles from './styles/index.module.scss';
import profile from '../profile/styles/index.module.scss';

// hooks
import { useSignUp } from '../../../../hooks/useSignUp';

// types
import { IProfile } from '../../../../types';

export const SignUp = () => {
    const signUp = useSignUp();
    const [gender, setGender] = useState('');
    const form = useForm({
        mode:     'onTouched',
        resolver: yupResolver(schema),
    });

    const onSubmit = form.handleSubmit(async (user: IProfile) => {
        const profileState = {
            sex:      gender,
            fname:    user.fname,
            lname:    user.lname,
            password: user.password,
            age:      user.age,
            email:    user.email,
            height:   user.height,
            weight:   user.weight,

        };
        await signUp.mutateAsync(profileState);
        form.reset();
    });

    const classNamesF = cx(profile.female, {
        [ profile.selected ]: gender === 'f',
    });

    const classNamesM = cx(profile.male, {
        [ profile.selected ]: gender === 'm',
    });

    return (
        <section className = { styles.registration }>
            <div className = { styles.left } >
                <div

                    className = { profile.profile }>
                    <h1>Профиль</h1>
                    <div className = { profile.gender }>
                        <div
                            onClick = { () => setGender('f') }
                            className = { classNamesF }>
                            <span >Женщина</span>
                        </div>
                        <div
                            onClick = { () => setGender('m') }
                            className = { classNamesM }>
                            <span >Мужчина</span>
                        </div>
                    </div>
                    <div className = { profile.inputRow }>
                        <Input
                            label = 'Электропочта'
                            type = 'text'
                            register = { form.register('email') }
                            error = { form.formState.errors.email }
                            placeholder = 'Введите свой email' />
                    </div>

                    <div className = { profile.inputRow }>
                        <Input
                            label = 'Имя'
                            type = 'text'
                            register = { form.register('fname') }
                            error = { form.formState.errors.fname }
                            placeholder = 'Введите свое имя' />
                    </div>

                    <div className = { profile.inputRow }>
                        <Input
                            label = 'Имя'
                            type = 'text'
                            register = { form.register('lname') }
                            error = { form.formState.errors.lname }
                            placeholder = 'Введите свою фамилию' />
                    </div>

                    <div className = { profile.inputRow }>
                        <Input
                            label = 'Пароль'
                            type = 'password'
                            register = { form.register('password') }
                            error = { form.formState.errors.password }
                            placeholder = 'Введите свой пароль' />
                    </div>

                    <div className = { profile.inputRow }>
                        <Input
                            label = 'Возраст'
                            type = 'number'
                            register = { form.register('age') }
                            error = { form.formState.errors.age }
                            placeholder = 'Введите свой возраст' />
                    </div>

                    <div className = { profile.inputRow }>
                        <Input
                            label = 'Рост'
                            type = 'number'
                            register = { form.register('height') }
                            error = { form.formState.errors.height }

                            placeholder = 'Введите свой рост' />
                    </div>

                    <div className = { profile.inputRow }>
                        <Input
                            label = 'Вес'
                            type = 'number'
                            register = { form.register('weight') }
                            error = { form.formState.errors.weight }

                            placeholder = 'Введите свой вес' />
                    </div>
                    <div className = { profile.controls }>
                        <button className = { profile.clearData } >Сбросить</button>
                        <button type = 'submit' onClick = { onSubmit }>Зарегистрироваться</button>
                    </div>
                </div>

            </div>
            <div className = { styles.right }>
            </div>
        </section>
    );
};
