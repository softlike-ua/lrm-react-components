import React from 'react';
import { Button, Card, Heading, Input, SubHeading } from '../components';

const Home = () => (
  <Card bgColor="red">
    <Heading>Heading</Heading>
    <SubHeading>Sub Heading</SubHeading>
    <Input labelName="Your Name" inputId="name" />
    <Button bgColor="green" padding="10px">
      some text
    </Button>
  </Card>
);

export default Home;
