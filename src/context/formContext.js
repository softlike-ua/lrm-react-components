import React, { useState, createContext } from 'react';

const FormContext = createContext({});

const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState({});
  return (
    <FormContext.Provider value={{ formData, setFormData }}>
      {children}
    </FormContext.Provider>
  );
};

export { FormContext, FormProvider };
