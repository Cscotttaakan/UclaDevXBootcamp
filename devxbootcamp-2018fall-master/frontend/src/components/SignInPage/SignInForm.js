import React from 'react';
import {connect} from 'react-redux';

import * as actions from '../../actions';

export class SignInForm extends React.Component {
  state = {
    email: '',
    password: '',
  };

  constructor(props) {
    super(props);

    this.handleValueChange = this.handleValueChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleValueChange(event) {
    const {name, value} = event.target;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit() {
    this.props.logIn(this.state.email, this.state.password);
  }

  render() {
    return (
      <div className="sign-in-form">
        <div>
          <label>
            Email
            <input
              name="email"
              type="email"
              value={this.state.email}
              onChange={this.handleValueChange}
            />
          </label>
        </div>
        <div>
          <label>
            Password
            <input
              name="password"
              type="password"
              value={this.state.password}
              onChange={this.handleValueChange}
            />
          </label>
        </div>

        <input hidden type="submit" />
        <button type="submit" onClick={this.handleSubmit}>
          Sign In
        </button>
      </div>
    );
  }
}

export default connect(
  null,
  actions,
)(SignInForm);
