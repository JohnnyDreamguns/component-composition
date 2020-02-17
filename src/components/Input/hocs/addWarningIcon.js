import React from 'react';

const addWarningIcon = ({ symbol, predicateProp }) => Component => props => (
  <React.Fragment>
    <Component {...props} />
    {props[predicateProp] && <p>{symbol}</p>}
  </React.Fragment>
);

export default addWarningIcon;
