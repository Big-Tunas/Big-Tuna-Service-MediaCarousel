import React from 'react';
import Listing from './Listing.jsx';

const MediaCarousel = (props) => (
  <div>
    {props.data.map((dataPerListing, i) => <Listing dataPerListing={dataPerListing}
                                                    key={i}
                                                    />)}
  </div>
);

export default MediaCarousel;