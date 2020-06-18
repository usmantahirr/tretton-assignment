import React from 'react';
import SingleColumnTemplate from '../templates/singleColumnTemplate';
import Filters from '../organisms/Filters';
import NinjaList from '../organisms/NinjaList';

const HomePage = ({ ninjas }) => (
  <SingleColumnTemplate>
    <div id="ninjas" className="u-center-text u-margin-bottom-big">
      <h2 className="heading-secondary">Our Ninjas</h2>
    </div>

    <NinjaList ninjas={ninjas} />
  </SingleColumnTemplate>
);

export default HomePage;
