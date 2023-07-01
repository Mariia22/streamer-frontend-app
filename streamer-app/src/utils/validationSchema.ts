import * as yup from 'yup';

export const validationSchema = yup.object({
  name: yup.string().min(2, 'Enter a valid name').required('Name is required'),
  platform: yup.string().min(1, 'Choose a platform').required('Platform is required'),
  description: yup
    .string()
    .min(8, 'Description should be of minimum 8 characters length')
    .required('Description is required'),
});
