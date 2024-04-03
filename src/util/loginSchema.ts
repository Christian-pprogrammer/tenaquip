import * as Yup from 'yup';

export const loginSchema = Yup.object().shape({
  
  email: Yup.string().required('Please fill out this field').email('Enter valid email'),
  password: Yup.string().required('Please fill out this field')
});
