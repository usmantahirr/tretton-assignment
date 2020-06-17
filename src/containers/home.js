import React from 'react';
import HomePage from '../shared/pages/HomePage';

const HomeContainer = () => {
  // add API call etc;
  return (
    <HomePage
      ninjas={[
        {
          name: 'Ninja 1',
        },
        {
          name: 'Ninja 2',
        },
      ]}
    />
  );
};

export default HomeContainer;
