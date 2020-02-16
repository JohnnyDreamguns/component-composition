import React from 'react';

const withLabel = id => Component => props => (
  <React.Fragment>
    <label for={id}>The label</label>
    <Component id={id} name={id} />
  </React.Fragment>
);

export default withLabel;
