import React from 'react';
import {connect} from 'react-redux';

import * as actions from '../../actions';
import SignUpForm from './SignUpForm';
import SignInForm from './SignInForm';

import './SignInPage.scss';

export class SignInPage extends React.Component {
  state = {
    signX: 'in',
  };

  makeTabClassName(signX) {
    return `tab-selector-item ${this.state.signX === signX && 'selected'}`;
  }

  render() {
    const Form = {
      in: SignInForm,
      up: SignUpForm,
    }[this.state.signX];

    return (
      <div className="sign-in-page">
        <div className="tab-selector">
          <div
            className={this.makeTabClassName('in')}
            onClick={() => this.setState({signX: 'in'})}
          >
            Sign In
          </div>

          <div
            className={this.makeTabClassName('up')}
            onClick={() => this.setState({signX: 'up'})}
          >
            Sign Up
          </div>
        </div>

        <div className="sign-x-form">
          <Form />
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  actions,
)(SignInPage);
