import React from 'react';
import {connect} from 'react-redux';

import {getUser} from '../../actions';
import NewGrowl from 'components/NewGrowl';
import GrowlFeed from 'components/GrowlFeed';
import ProfileCard from 'components/ProfileCard';

import './HomePage.scss';

class HomePage extends React.Component {
  componentDidMount() {
    this.props.getUser();
  }

  render() {
    return (
      <div className="home-page">
        <div className="home-page-profile-section">
          <ProfileCard
            name={this.props.name}
            description={this.props.description}
          />
        </div>
        <div className="home-page-growl-feed-section">
          <NewGrowl />
          <GrowlFeed />
        </div>
      </div>
    );
  }
}

export const mapStateToProps = (state) => ({
  name: state.user.name,
  description: state.user.description,
});

export default connect(
  mapStateToProps,
  {getUser},
)(HomePage);
