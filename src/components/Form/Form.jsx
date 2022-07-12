import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { formValidationSchema } from './FormValidationSchema';
import './Form.styles.scss';
import { Input } from '../Input/Input';
import { Button } from '../Button/Button';
import { FormContext } from '../../context/formContext';

export const Form = () => {
  const { setFormData } = useContext(FormContext);
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isDirty },
    reset,
  } = useForm({
    resolver: yupResolver(formValidationSchema),
    mode: 'onChange',
  });
  const onSubmit = (data) => {
    alert(JSON.stringify(data));
    localStorage.setItem('form-items', JSON.stringify(data));
    setFormData(JSON.parse(localStorage.getItem('form-items')));
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
      <div>
        <h4>Get notification</h4>
        <input type="checkbox" {...register('notification')} />
      </div>
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
