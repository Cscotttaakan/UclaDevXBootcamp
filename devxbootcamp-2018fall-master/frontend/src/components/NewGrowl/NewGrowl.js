import React from 'react';
import {connect} from 'react-redux';
import * as actions from 'actions';

import './NewGrowl.scss';

class NewGrowl extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      growlText: '',
    };

    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleTextChange(event) {
    const {value} = event.target;
    this.setState({growlText: value});
  }

  handleSubmit() {
    console.log(this.state.growlText);
    this.props.createGrowl(this.state.growlText, (error, data) => {
      // Redirect to the Growl Feed
    });
    return false;
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          className="growl-input"
          placeholder="What's growling?"
          type="text"
          value={this.state.growlText}
          onChange={this.handleTextChange}
        />
        <input hidden type="submit" />
      </form>
    );
  }
}

export default connect(
  null,
  actions,
)(NewGrowl);
