import React from 'react';

import Navbar from 'components/Navbar';

import './Skeleton.scss';

const Skeleton = ({children}) => {
  return (
    <div className="skeleton">
      <div className="skeleton-navbar">
        <Navbar />
      </div>
      <div className="skeleton-inner-content">{children}</div>
    </div>
  );
};
export default Skeleton;
