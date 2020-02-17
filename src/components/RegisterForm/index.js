import React from 'react';
import addLabel from '../Input/hocs/addLabel';
import addChangeLogger from '../Input/hocs/addChangeLogger';
import addWarningIcon from '../Input/hocs/addWarningIcon';
import Input from '../Input';

const RegisterForm = () => (
  <Input
    id="firstname"
    name="firstname"
    features={[
      addLabel('First Name'),
      addWarningIcon({ symbol: '!', predicateProp: 'hasError' }),
      addChangeLogger
    ]}
    hasError={false}
  />
);

export default RegisterForm;
