import React from 'react';
import {connect} from 'react-redux';

import {getGrowls} from 'actions';
import Growl from '../Growl';

import './GrowlFeed.scss';

export class GrowlFeed extends React.Component {
  static defaultProps = {
    growls: [],
    growlFilter: (growl) => true,
  };

  constructor(props) {
    super(props);
    // TODO: Implement
	props.getGrowls() 
  }

  render() {
	return (
		<div className="growl-list">
		{

		this.props.growls.filter(this.props.growlFilter).map(growl => (
		<Growl
			key={growl.id}
			id={growl.id}
			userId={growl.user_id}
			userName={growl.user_name}
			text={growl.text}
			createdAt={growl.created_at}
		/>
	))
		}
		</div>
	);

    // TODO: Implement using filter, map, and the Growl component imported above
  }

}

export const mapStateToProps = (state) => ({
  // TODO: Implement
	growls: state.growls.growlsList
});

export default connect(
  mapStateToProps,
  {getGrowls},
)(GrowlFeed);
