import React, { useContext } from 'react';
import { Card, Heading, SubHeading, Form } from '../../components';
import { FormContext } from '../../context/formContext';
import './Home.styles.scss';

const Home = () => {
  const formContext = useContext(FormContext);

  return (
    <div className="content">
      <Card bgColor="#EA8787FF">
        <Heading>Register</Heading>
        <SubHeading>Sub Heading</SubHeading>
        <Form />
      </Card>
      {Object.keys(formContext.formData).length > 0 && (
        <Card bgColor={formContext.formData.color}>
          <Heading>Results</Heading>
          <SubHeading>Sub Heading</SubHeading>
          <div>
            <h4>Gender</h4>
            <p>{formContext.formData.gender}</p>
          </div>
          <div>
            <h4>Name</h4>
            <p>{formContext.formData.name}</p>
          </div>
          <div>
            <h4>Surname</h4>
            <p>{formContext.formData.surname}</p>
          </div>
          <div>
            <h4>Email</h4>
            <p>{formContext.formData.email}</p>
          </div>
          <div>
            <h4>Age</h4>
            <p>{formContext.formData.age}</p>
          </div>
          <div>
            <h4>Notification</h4>
            <p>{formContext.formData.notification.toString()}</p>
          </div>
        </Card>
      )}
    </div>
  );
};

export default Home;
