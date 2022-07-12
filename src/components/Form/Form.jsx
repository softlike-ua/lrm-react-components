import React from 'react';
import './Form.styles.scss';
import { Input } from '../Input/Input';
import { Button } from '../Button/Button';

export const Form = () => (
  <form>
    <Input labelName="Your Name" inputId="name" />
    <Input labelName="Your Surname" inputId="surname" />
    <Input labelName="Your email" inputId="email" />
    <Input labelName="Age" inputId="age" />
    <Input labelName="Favorite color" inputId="color" />
    <div className="form-buttons">
      <Button bgColor="red" padding="10px" typeBtn="submit">
        Cancel
      </Button>
      <Button bgColor="green" padding="10px" typeBtn="submit">
        Submit
      </Button>
    </div>
  </form>
);
