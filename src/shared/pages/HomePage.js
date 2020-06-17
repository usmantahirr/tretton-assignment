import React from 'react';
import SingleColumnTemplate from '../templates/singleColumnTemplate';
import Navigation from '../organisms/Navigation';
import NinjaList from '../organisms/NinjaList';

const HomePage = ({ ninjas }) => (
  <SingleColumnTemplate>
    <Navigation />
    <NinjaList ninjas={ninjas} />
  </SingleColumnTemplate>
);

export default HomePage;
