import React from 'react';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';

import Growl from '../../src/components/Growl/Growl';
import {GrowlFeed} from '../../src/components/GrowlFeed/GrowlFeed';

const MAKE_SAMPLE_GROWLS = () => [
  {
    id: '1',
    userId: '2',
    text: 'Test success',
    createdAt: new Date(
      'Tue Oct 09 2018 21:53:47 GMT-0700 (Pacific Daylight Time)',
    ),
  },
  {
    id: '2',
    userId: '3',
    text: 'Test fail',
    createdAt: new Date(
      'Tue Oct 09 2018 13:53:47 GMT-0700 (Pacific Daylight Time)',
    ),
  },
];

const props = {
  getGrowls: jest.fn(),
  growls: MAKE_SAMPLE_GROWLS(),
};

describe('GrowlFeed component', () => {
  it('renders matching the saved snapshot', () => {
    // Render to a tree that we can compare against our snapshot of the component
    const tree = renderer.create(<GrowlFeed {...props} />);
    expect(tree).toMatchSnapshot();
  });

  it('calls getGrowls when it initially renders', () => {
    // Render the component using Enzyme's shallow() tool
    const component = shallow(<GrowlFeed {...props} />);

    // Expect that GrowlFeed requested growls from Redux after it was constructed
    expect(props.getGrowls).toHaveBeenCalled();
  });

  it('renders correctly when filters growls as expected', () => {
    // Render the component using Enzyme's shallow() tool
    const component = shallow(
      <GrowlFeed {...props} growlFilter={(growl) => growl.id === '1'} />,
    );

    // Find all the Growl components
    const growlElements = component.find(Growl);
    // Ensure that it rendered only one Growl component for the one with id '1'
    expect(growlElements.length).toBe(1);
    expect(
      growlElements.everyWhere((growlEl) => growlEl.key() === '1'),
    ).toBeTruthy();
  });
});
