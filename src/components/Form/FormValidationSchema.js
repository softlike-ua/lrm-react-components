import * as yup from 'yup';

export const formValidationSchema = yup
  .object({
    name: yup
      .string()
      .required()
      .matches(/^[aA-zZ\s]+$/, 'Only alphabets are allowed for this field '),
    surname: yup
      .string()
      .required()
      .matches(/^[aA-zZ\s]+$/, 'Only alphabets are allowed for this field '),
    email: yup.string().required().email(),
    age: yup
      .string()
      .required()
      .matches(/^\d+$/, 'The field should have digits only'),
    color: yup.string().required(),
    gender: yup.string().nullable().required(),
  })
  .required();
