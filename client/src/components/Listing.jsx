import React from 'react';

const Listing = (props) => (
  <div>
    <h2>Photos</h2>
    <img src={props.dataPerListing.photos[0]} />
    <img src={props.dataPerListing.photos[1]} />
    <img src={props.dataPerListing.photos[2]} />
    <img src={props.dataPerListing.photos[3]} />
    <img src={props.dataPerListing.photos[4]} />
    <h5>3D Room</h5>
    <span>{props.dataPerListing.threeD_room_view}</span>
    <h5>Street View</h5>
    <span classname='streetView'>{props.dataPerListing.street_view}</span>
  </div>
);

export default Listing;