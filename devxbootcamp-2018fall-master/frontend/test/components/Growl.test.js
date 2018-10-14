import React from 'react';
import renderer from 'react-test-renderer';

import Growl from '../../src/components/Growl';

describe('Growl component', () => {
  it('renders as expected', () => {
    const props = {
      id: 1,
      userId: 2,
      text: 'Test text',
      createdAt: new Date(
        'Sat Oct 06 2018 13:09:47 GMT-0700 (Pacific Daylight Time)',
      ),
    };
    const tree = renderer.create(<Growl {...props} />);
    expect(tree).toMatchSnapshot();
  });
});
