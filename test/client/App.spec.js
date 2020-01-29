import React from 'react';
import {shallow, mount, render} from 'enzyme';
import App from '../../client/src/components/App.jsx';
import MediaCarousel from '../../client/src/components/MediaCarousel.jsx';
import Listing from '../../client/src/components/Listing.jsx';

describe('App component', () => {

  it('renders with an image tag', () => {
    let wrapper = shallow(<App />);
    expect(wrapper.find('img')).toBeDefined();
  });

});
