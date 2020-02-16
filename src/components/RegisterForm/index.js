import React from 'react';
import { compose, add } from 'ramda';
import addLabel from '../../hocs/formFields/withLabel';
import withConsoleLog from '../../hocs/formFields/withConsoleLog';
import Input from '../Input';

const FirstName = compose(addLabel('firstname'), withConsoleLog)(Input);

const RegisterForm = () => (
  <React.Fragment>
    <FirstName />
  </React.Fragment>
);

export default RegisterForm;
