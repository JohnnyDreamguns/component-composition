import React from 'react';

const addLabel = text => Component => props => (
  <React.Fragment>
    <label htmlFor={props.id}>{text}</label>
    <Component {...props} />
  </React.Fragment>
);

export default addLabel;
