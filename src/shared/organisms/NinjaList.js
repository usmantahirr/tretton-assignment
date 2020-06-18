import React from 'react';
import Ninja from '../molecules/ninja';

const NinjaList = ({ ninjas }) => {
  if (!ninjas || (ninjas && !ninjas.length)) return <div>No Ninjas Found</div>;

  const rows = [...Array(Math.ceil(ninjas.length / 4))];
  const productRows = rows.map((row, idx) => ninjas.slice(idx * 4, idx * 4 + 4));

  const content = productRows.map((row, idx) => (
    <div className="row" key={idx}>
      {row.map((ninja) => (
        <div key={ninja.email} className="col-1-of-4">
          <Ninja ninja={ninja} />
        </div>
      ))}
    </div>
  ));

  return <div>{content}</div>;
};

export default NinjaList;
