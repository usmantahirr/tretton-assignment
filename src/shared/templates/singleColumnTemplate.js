import React from 'react';
import Header from '../atoms/header';

const SingleColumnTemplate = ({ children }) => (
  <div>
    <Header primaryText="Tretton37" secondaryText="We've got this." />
    {children}
  </div>
);

export default SingleColumnTemplate;
