import React from 'react';

export default class SignUpForm extends React.Component {
  state = {
    name: '',
    email: '',
    password: '',
    description: '',
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
    this.props.createUser({
      email: this.state.email,
      password: this.state.password,
      name: this.state.name,
      description: this.state.description,
    });
  }

  render() {
    return (
      <div className="sign-up-form">
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
        <div>
          <label>
            Name
            <input
              name="name"
              type="text"
              value={this.state.name}
              onChange={this.handleValueChange}
            />
          </label>
        </div>
        <div>
          <label>
            Description
            <input
              name="description"
              type="text"
              value={this.state.description}
              onChange={this.handleValueChange}
            />
          </label>
        </div>
        <input hidden type="submit" />
        <button type="submit" onClick={this.handleSubmit}>
          Sign Up
        </button>
      </div>
    );
  }
}
