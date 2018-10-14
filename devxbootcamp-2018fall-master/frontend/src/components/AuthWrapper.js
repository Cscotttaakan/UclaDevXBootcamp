import React from 'react';
import {connect} from 'react-redux';

import SignInPage from './SignInPage';

const AuthWrapper = ({userId, loggedIn, children}) =>
  userId && loggedIn ? children : <SignInPage />;

const mapStateToProps = (state) => ({
  userId: state.auth.userId,
  loggedIn: state.auth.loggedIn,
});

export default connect(mapStateToProps)(AuthWrapper);
