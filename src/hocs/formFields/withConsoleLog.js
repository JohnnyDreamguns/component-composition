import React from 'react';

const handleChange = e => {
  console.log(e);
};

const withConsoleLog = Component => props => (
  <Component onChange={handleChange} />
);

export default withConsoleLog;
