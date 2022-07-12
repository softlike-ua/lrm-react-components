import React, { useContext } from 'react';
import { Card, Heading, SubHeading, Form } from '../../components';
import { FormContext } from '../../context/formContext';
import './Home.styles.scss';

const Home = () => {
  const formContext = useContext(FormContext);

  return (
    <div className="content">
      <Card bgColor="#EA8787FF">
        <Heading>Heading</Heading>
        <SubHeading>Sub Heading</SubHeading>
        <Form />
      </Card>
      {Object.keys(formContext.formData).length > 0 && (
        <Card bgColor={formContext.formData.color}>
          <Heading>Heading</Heading>
          <SubHeading>Sub Heading</SubHeading>
          <div>{formContext.formData.gender}</div>
          <div>{formContext.formData.name}</div>
          <div>{formContext.formData.surname}</div>
          <div>{formContext.formData.email}</div>
          <div>{formContext.formData.age}</div>
        </Card>
      )}
    </div>
  );
};

export default Home;
