import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import * as actions from '../../actions';

import './Navbar.scss';

export const Navbar = (props) => {
  return (
    <nav className="navbar">
      <div className="brand">
        <Link to="/">🐻 Growler</Link>
      </div>
      <div className="links">
        {props.loggedIn && (
          <button onClick={props.logOut} className="link-item log-out">
            <h4>Log Out</h4>
          </button>
        )}
      </div>
    </nav>
  );
};

const mapStateToProps = (state) => ({
  loggedIn: state.auth.loggedIn,
});

export default connect(
  mapStateToProps,
  actions,
)(Navbar);
