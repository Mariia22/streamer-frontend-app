import * as yup from 'yup';

export const validationSchema = yup.object({
  name: yup.string().email('Enter a valid email').required('Email is required'),
  description: yup
    .string()
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
});
