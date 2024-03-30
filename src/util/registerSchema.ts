import * as Yup from 'yup';

export const registerSchema = Yup.object().shape({
  first_name: Yup.string()
    .required('Please fill out this field'),
  last_name: Yup.string().required('Please fill out this field'),
  jobTitle: Yup.string().required('Please fill out this field'),
  email: Yup.string().required('Please fill out this field').email('Enter valid email'),
  password: Yup.string().required('Please fill out this field').min(8).matches(/[a-zA-Z]/, 'Must contain at least 1 letter').matches(/[0-9]/, 'Must containt at least 1 number').matches(/[~!@#$%^&*()_+]/, 'Must contain at least 1 special character [~!@#$%^&*()_+]'),
  repeatPassword: Yup.string().required('This field is required')
    .oneOf([Yup.ref('password')], 'Passwords do not match'),
  resetQuestion: Yup.string().required('Select Item from dropdown'),
  resetQuestionAnswer: Yup.string().required('Please fill out this field'),
  companyName: Yup.string().required('Please fill out this field'),
  address: Yup.string().required('Please fill out this field'),
  address2: Yup.string(),
  city: Yup.string().required('Please fill out this field'),
  country: Yup.string().required('Select Item from dropdown'),
  province: Yup.string().required('Select Item from dropdown'),
  zipCode: Yup.string().required('Please fill out this field'),
  phone: Yup.string().required('Please fill out this field'),
  extension: Yup.string(),
  correspondence: Yup.string().required('Please fill out this field'),
  receiveEmails: Yup.boolean()
});
