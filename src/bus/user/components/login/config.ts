import * as yup from 'yup';
import { ILoginFormShape } from '../../../tracker/components/forms/types';

// eslint-disable-next-line no-template-curly-in-string
const tooShortMessage = 'минимальная длина = ${min} символов';

// eslint-disable-next-line no-template-curly-in-string
const tooLongMessage = 'максимальная длина = ${min} символов';

export const schema: yup.SchemaOf<ILoginFormShape> = yup.object().shape({
    email: yup
        .string()
        .email()
        .required('*'),
    password: yup
        .string()
        .min(8, tooShortMessage)
        .max(16, tooLongMessage)
        .required('*'),
});
