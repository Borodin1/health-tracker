import { UseFormRegisterReturn } from 'react-hook-form';
import styles from '../../bus/user/components/registration/styles/index.module.scss';

export const Input: React.FC<IInputPropsTypes> = ({
    placeholder, type, register, options, tag, error, label,
}: IInputPropsTypes) => {
    let input = (
        <input
            placeholder = { placeholder }
            type = { type }
            { ...register } />
    );

    if (tag === 'textarea') {
        input = (
            <textarea
                placeholder = { placeholder }
                { ...register }>

            </textarea>
        );
    }

    if (tag === 'select') {
        const optionJSX = options?.map((option) => {
            return (
                <option key = { option.value } value = { option.value }>
                    { option.name }
                </option>
            );
        });
        input = <select { ...register }>{ optionJSX }</select>;
    }

    return (
        <>
            <label>
                <div>
                    <span className = { styles.error }>{ error?.message }</span>
                </div>

                { label }
            </label>
            { input }
        </>
    );
};

Input.defaultProps = {
    type: 'text',
    tag:  'input',
};

interface IInputPropsTypes {
    placeholder: string;
    type?: string;
    tag?: string;
    label?: string;
    register: UseFormRegisterReturn;
    error?: {
        message?: string
    }
    options?: { value: string;name: string }[];
}

