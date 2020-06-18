import React from 'react';

const Card = ({ image, heading, backside, children }) => (
  <div className="card">
    <div className="card__side card__side--front">
      <div className="card__picture" style={{ background: `url(${image}) no-repeat`, backgroundSize: 'contain' }}>
        &nbsp;
      </div>
      <h4 className="card__heading">
        <span className="card__heading-span">{heading}</span>
      </h4>
      <div className="card__details">{children}</div>
    </div>
    <div className="card__side card__side--back">
      <div className="card__details">{backside}</div>
    </div>
  </div>
);

export default Card;
