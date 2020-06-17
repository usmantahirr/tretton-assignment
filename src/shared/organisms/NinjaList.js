import React from 'react';
import Ninja from '../molecules/ninja';

const NinjaList = ({ ninjas }) => (
  <div>{ninjas && ninjas.length ? ninjas.map((ninja) => <Ninja ninja={ninja} />) : <div>No ninjas found</div>}</div>
);

export default NinjaList;
