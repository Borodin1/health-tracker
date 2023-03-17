import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import styles from './styles/index.module.scss';
import { schema } from './config';
import { Input } from '../../../../elements/customInput';
import { ILoginFormShape } from '../../../tracker/components/forms/types';
import { useLogin } from '../../../../hooks/useLogin';

export const LoginForm: React.FC = () => {
    const login = useLogin();
    const form  = useForm({
        mode:     'onTouched',
        resolver: yupResolver(schema),
    });

    const onSubmit = form.handleSubmit(async (credentials: ILoginFormShape) => {
        await login.mutateAsync(credentials);
        form.reset();
    });

    return (
        <section className = { styles.login }>
            <div className = { styles.content } >
                <h1>Добро пожаловать!</h1>
                <div className = { styles.inputRow }>
                    <Input
                        label = 'Электропочта'
                        error = { form.formState.errors.email }
                        register = { form.register('email') }
                        type = 'email'
                        placeholder = 'Введите свою электропочту' />
                </div>
                <div className = { styles.inputRow }>
                    <Input
                        label = 'Пароль'
                        type = 'password'
                        error = { form.formState.errors.password }
                        register = { form.register('password') }
                        placeholder = 'Введите свой пароль' />
                </div>
                <div>
                    <button type = 'submit' onClick = { onSubmit }>Войти в систему</button>
                    <div className = { styles.loginLink }>
                        <span>Если у вас нет аккаунта, пожалуйста
                            <Link to = '/registration'> зарегистрируйтесь</Link>
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};
