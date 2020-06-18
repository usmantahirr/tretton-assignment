import React from 'react';
import Ninja from '../molecules/ninja';

const NinjaList = ({ ninjas }) => (
  <div className="row">
    {ninjas && ninjas.length ? (
      ninjas.map((ninja) => (
        <div className="col-1-of-4" key={ninja.email}>
          <Ninja ninja={ninja} />
        </div>
      ))
    ) : (
      <div>No ninjas found</div>
    )}
  </div>
);

export default NinjaList;
