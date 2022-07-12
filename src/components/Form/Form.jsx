import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import './Form.styles.scss';
import { Input } from '../Input/Input';
import { Button } from '../Button/Button';

const schema = yup
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
    age: yup.string().required(),
    color: yup
      .string()
      .required()
      .matches(/^[aA-zZ\s]+$/, 'Only alphabets are allowed for this field '),
    gender: yup.string().nullable().required(),
  })
  .required();

export const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isDirty },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });
  const onSubmit = (data) => {
    alert(JSON.stringify(data));
    localStorage.setItem('form-items', JSON.stringify(data));
    reset();
  };
  const resetBtn = () => {
    reset();
  };

  const disabledBtn = !isDirty || !isValid;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <h4>Gender</h4>
        <input
          type="radio"
          name="gender"
          value="male"
          {...register('gender')}
        />{' '}
        Male
        <input
          type="radio"
          name="gender"
          value="female"
          {...register('gender')}
        />{' '}
        Female
        {errors.gender && <div>{errors.gender.message}</div>}
      </div>
      <Input
        {...register('name')}
        labelName="Your Name"
        inputId="name"
        type="text"
        error={errors.name}
      />
      <Input
        {...register('surname')}
        labelName="Your Surname"
        inputId="surname"
        type="text"
        error={errors.surname}
      />
      <Input
        {...register('email')}
        labelName="Your email"
        inputId="email"
        type="text"
        error={errors.email}
      />
      <Input
        {...register('age')}
        labelName="Age"
        inputId="age"
        type="text"
        error={errors.age}
      />
      <Input
        {...register('color')}
        labelName="Favorite color"
        inputId="color"
        type="text"
        error={errors.color}
      />
      <div className="form-buttons">
        <Button bgColor="red" padding="10px" typeBtn="button" reset={resetBtn}>
          Cancel
        </Button>
        <Button
          bgColor="green"
          padding="10px"
          typeBtn="submit"
          disabledBtn={disabledBtn}
        >
          Submit
        </Button>
      </div>
    </form>
  );
};
