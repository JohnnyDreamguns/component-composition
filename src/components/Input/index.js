import React from 'react';
import { compose } from 'ramda';

const Input = ({ features, ...props }) => {
  const InputComponent = ({ hasError, ...props }) => <input {...props} />;

  const WrappedComponent = features
    ? compose(...features)(InputComponent)
    : InputComponent;

  return <WrappedComponent {...props} />;
};

export default Input;
