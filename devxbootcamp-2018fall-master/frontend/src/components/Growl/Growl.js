import React from 'react';
import dateFormat from 'dateformat';

import './Growl.scss';

const Growl = ({id, userId, userName, text, createdAt}) => (
  <div className="growl-card">
    <div className="growl-meta">
      <p className="growl-user-name">{userName}</p>
      {createdAt && (
        <p className="growl-created-at">
          {dateFormat(createdAt, 'mmm d, yyyy h:mm tt')}
        </p>
      )}
    </div>
    <p className="growl-text">{text}</p>
  </div>
);

export default Growl;
