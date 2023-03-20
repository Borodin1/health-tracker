import * as yup from 'yup';

// eslint-disable-next-line no-template-curly-in-string
const tooShortMessage = 'минимальная длина = ${min} символов';

// eslint-disable-next-line no-template-curly-in-string
const tooLongMessage = 'максимальная длина = ${min} символов';

export const schema = yup.object().shape({
    fname: yup
        .string()
        .min(5, tooShortMessage)
        .max(40, tooLongMessage)
        .required('*'),
    lname: yup
        .string()
        .min(5, tooShortMessage)
        .max(40, tooLongMessage)
        .required('*'),
    sex: yup
        .string()
        .required('*'),
    email: yup
        .string()
        .email()
        .required('*'),
    age: yup
        .number()
        .required('*')
        .max(99),
    height: yup
        .number()
        .required('*'),
    weight: yup
        .number()
        .required('*'),
    password: yup
        .string()
        .min(9, tooShortMessage)
        .max(16, tooLongMessage),
});

