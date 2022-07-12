import React from 'react';
import { Button, Card, Input } from '../components';

const Home = () => (
  <Card bgColor="red">
    <Input labelName="Your Name" inputId="name" />
    <Button bgColor="green" padding="10px">
      some text
    </Button>
  </Card>
);

export default Home;
