interface RegisterInterface {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  repeatPassword?: string;
  jobTitle: string;
  resetQuestion: string;
  resetQuestionAnswer: string;
  companyName: string;
  address: string;
  address2: string;
  city: string;
  country: string;
  province: string;
  zipCode: string;
  phone: string;
  correspondence: string;
  receiveEmails: boolean;
}

interface AddressInterface {
  company: string;
  first_name?: string;
  last_name?: string;
  address_1: string;
  address_2: string;
  city: string;
  country_code: string;
  province: string;
  postal_code: string;
  phone?: string;
  email?: string;
}

interface LoginInterface {
  email: string;
  password: string;
} 

interface MainCategory {
  id: string;
  name: string;
  handle: string;
  metadata: {
    image: string
  };
  image: string;
}

interface Category {
  
  id: string;
  name: string;
  handle: string;
  metadata: {
    image: string
  };
}

interface Product {
  id: string;
  title: string;
  handle: string;
  thumbnail: string;
  variants: Array<{
    id: string,
    title: string,
    options: Array<{
      id: string,
      value: string
    }>,
    prices: Array<{
      id: string,
      currency_code: string,
      amount: string
    }>
  }>
}