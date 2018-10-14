import React from 'react';

import './ProfileCard.scss';

const ProfileCard = (props) => (
  <div className="profile-card">
    <h3>{props.name}</h3>
    <p>{props.description}</p>
  </div>
);

export default ProfileCard;
