import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStackOverflow, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

import Card from '../atoms/card';

const Ninja = ({ ninja }) => {
  const renderBackSide = () => <img src={ninja.imageBodyUrl} alt="Ninja Potrait" />;
  return (
    <Card heading={ninja.name} image={ninja.imagePortraitUrl} backside={renderBackSide()}>
      <ul>
        {ninja.phoneNumber && (
          <li>
            <b>Phone:&nbsp;</b>
            {ninja.phoneNumber}
          </li>
        )}
        {ninja.office && (
          <li>
            <b>Office:&nbsp;</b>
            {ninja.office}
          </li>
        )}
        {ninja.tagLine && (
          <li>
            <b>Tagline:&nbsp;</b>
            {ninja.tagLine}
          </li>
        )}
      </ul>
      <div className="card__social-icons">
        {ninja.stackOverflow && (
          <div>
            <FontAwesomeIcon icon={faStackOverflow} /> {ninja.stackOverflow}
          </div>
        )}
        {ninja.linkedIn && (
          <div>
            <FontAwesomeIcon icon={faLinkedin} /> {ninja.linkedIn}
          </div>
        )}
        {ninja.twitter && (
          <div>
            <FontAwesomeIcon icon={faTwitter} /> {ninja.twitter}
          </div>
        )}
      </div>
    </Card>
  );
};

export default Ninja;
