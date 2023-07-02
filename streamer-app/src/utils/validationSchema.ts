import * as yup from 'yup';
import { platforms } from './const';

export const validationSchema = yup.object({
  name: yup.string().min(2, 'Enter a valid name').required('Name is required'),
  platform: yup.mixed().required('Platform is required').oneOf(platforms),
  description: yup
    .string()
    .min(8, 'Description should be of minimum 8 characters length')
    .required('Description is required'),
});
