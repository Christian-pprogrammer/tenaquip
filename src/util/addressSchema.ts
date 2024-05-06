import * as Yup from 'yup';

export const addressSchema = Yup.object().shape({
  first_name: Yup.string().required("Please fill out this field"),
  last_name: Yup.string().required('Please fill out this field'),
  phone: Yup.string().required('Please fill out this field'),
  email: Yup.string().required('Please fill out this field').email('Enter valid email'),
  company: Yup.string().required('Please fill out this field'),
  address_1: Yup.string().required('Please fill out this field'),
  address_2: Yup.string(),
  city: Yup.string().required('Please fill out this field'),
  country_code: Yup.string().required('Select Item from dropdown'),
  province: Yup.string().required('Select Item from dropdown'),
  postal_code: Yup.string().required('Please fill out this field')
});
