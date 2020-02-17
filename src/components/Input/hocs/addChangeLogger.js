import React from 'react';

const handleChange = e => {
  console.log(e);
};

const addChangeLogger = Component => props => (
  <Component onChange={handleChange} {...props} />
);

export default addChangeLogger;
